import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Find Founder's message
# It starts with '      {/* Founder's Message & Mission */}'
# and ends with '      </section>' right before '      {/* Asymmetric Three-Unit Matrix */}'
match = re.search(r'(      \{\/\* Founder\'s Message & Mission \*\/}.*?      <\/section>\n)', content, re.DOTALL)
if match:
    founders_message = match.group(1)
    
    # Remove it from current position
    content = content.replace(founders_message, '')
    
    # Find where to insert it: before '{/* Patient Facilities */}'
    insert_pos = content.find('      {/* Patient Facilities */}')
    if insert_pos != -1:
        content = content[:insert_pos] + founders_message + '\n' + content[insert_pos:]
        
        with open('src/pages/Home.tsx', 'w') as f:
            f.write(content)
        print("Success")
    else:
        print("Could not find Patient Facilities")
else:
    print("Could not find Founder's Message")
