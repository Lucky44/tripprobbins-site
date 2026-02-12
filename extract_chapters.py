
import os
import re

source_path = r"C:\Users\tripp\.gemini\antigravity\scratch\personal-website\site_source.html"
output_path = r"C:\Users\tripp\.gemini\antigravity\scratch\personal-website\extracted_text.txt"

with open(source_path, 'r', encoding='utf-8') as f:
    content = f.read()

def extract_between(start_regex, end_regex):
    m_start = re.search(start_regex, content, re.IGNORECASE)
    if not m_start:
        return f"Start not found: {start_regex}"
    m_end = re.search(end_regex, content[m_start.end():], re.IGNORECASE)
    if not m_end:
        return content[m_start.start() : m_start.start() + 5000] # Large chunk if no end
    return content[m_start.start() : m_start.end() + m_end.start()]

with open(output_path, 'w', encoding='utf-8') as out:
    out.write("--- CHAPTER 2 ---\n")
    out.write(extract_between(r"hospital at New Babbage", r"mobi vibrated on my wrist"))
    out.write("\n\n--- CHAPTER 3 ---\n")
    # Take a large chunk for Ch 3
    out.write(extract_between(r"mobi vibrated on my wrist", r"holding two others in his left hand"))
