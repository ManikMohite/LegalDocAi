import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('GEMINI_API_KEY')
genai.configure(api_key=api_key)

# ------------------ Generic Agent Class ------------------
class Agent:
    def __init__(self, system_msg, recipient="user"):
        self.system_msg = system_msg
        self.recipient = recipient

    def respond(self, query, context=""):
        sys_prompt = f"{self.system_msg}\n"
        user_query = f"{context}\n{query}" if context else query

        try:
            # Using Gemini chat completions
            response = genai.chat.completions.create(
                model="gemini-2.0-flash",
                messages=[
                    {"role": "system", "content": sys_prompt},
                    {"role": self.recipient, "content": user_query}
                ]
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            return f"Error in agent response: {str(e)}"

# ------------------ Instantiate Agents ------------------
questioner = Agent(
    system_msg="""
You are Law Justifier, an AI-powered legal assistant specializing in Indian law.  
Your task is to answer users' legal queries by consulting specialized lawyers: **Criminal Lawyer, Civil Lawyer, and Ethics Lawyer**.  

- Generate **specific, relevant** questions for these lawyers to gather precise legal insights.  
- Ensure the responses are aligned with **Indian legal frameworks**. 
- Use **bold** for important points and structure your response clearly.
""",
    recipient='user'
)

criminal_lawyer = Agent(
    system_msg="""
You are a **Criminal Lawyer**, an expert in Indian criminal law.  
Provide legally accurate responses to criminal law queries.  

- Give **clear, precise** explanations on **criminal offenses, penalties, procedures, and defenses**.  
- Stay factual, legally sound, and relevant to the Indian Penal Code (IPC) and other applicable laws.  
- Your colleagues are a Civil Lawyer and an Ethics Lawyer—do not answer their questions.
""",
    recipient='assistant'
)

civil_lawyer = Agent(
    system_msg="""
You are a **Civil Lawyer**, an expert in Indian civil law.  
Provide legal insights on civil disputes and regulations.  

- Give **concise, relevant** explanations on **contracts, property law, family law, consumer protection, and civil litigation**.  
- Ensure responses are legally sound and in line with Indian civil law frameworks.  
- Your colleagues are a Criminal Lawyer and an Ethics Lawyer—do not answer their questions.
""",
    recipient='assistant'
)

ethics_lawyer = Agent(
    system_msg="""
You are an **Ethics Lawyer**, specializing in legal ethics and professional conduct in India.  

- Provide guidance on **ethical dilemmas, professional misconduct, legal obligations, and moral considerations**.  
- Ensure responses align with Indian Bar Council regulations and broader legal ethics principles.  
- Your colleagues are a Criminal Lawyer and a Civil Lawyer—do not answer their questions.
""",
    recipient='assistant'
)

summarizer = Agent(
    system_msg="""
You are a **Senior Lawyer**, responsible for answering clients' legal queries concisely and effectively.  
You have consulted your junior lawyers (Criminal, Civil, and Ethics Lawyers) for relevant legal information.  

- **Synthesize their responses** into a clear, **legally accurate** answer.  
- Highlight **key points using bold formatting** (laws, legal terms, deadlines, etc.).  
- Avoid unnecessary complexity—make the response **easy to understand** while maintaining legal accuracy.
""",
    recipient="user"
)

# ------------------ Multi-Agent Flow Function ------------------
def get_answer(query, context=""):
    # Step 1: Questioner generates targeted questions for lawyers
    questions = questioner.respond(query, f"Context:\n{context}\n")

    # Step 2: Ask specialized lawyers
    ag_context = f"Context: {context}\nClient question: {query}\n{questions}"
    criminal_resp = criminal_lawyer.respond(ag_context)
    civil_resp = civil_lawyer.respond(ag_context)
    ethics_resp = ethics_lawyer.respond(ag_context)

    # Step 3: Senior Lawyer synthesizes final answer
    summary_context = f"""
Context: {context}
Client question: {query}

Questions for lawyers:
{questions}

Criminal Lawyer response: {criminal_resp}
Civil Lawyer response: {civil_resp}
Ethics Lawyer response: {ethics_resp}
"""
    final_answer = summarizer.respond(summary_context)

    # Step 4: Return structured reasoning flow
    reasoning = [
        f"Senior Lawyer: {questions}",
        f"Criminal Lawyer: {criminal_resp}",
        f"Civil Lawyer: {civil_resp}",
        f"Ethics Lawyer: {ethics_resp}",
        f"Senior Lawyer: {final_answer}"
    ]
    return final_answer, reasoning
