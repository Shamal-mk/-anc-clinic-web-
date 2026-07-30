import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace the img tag
old_img = '<img className="h-12 md:h-14 lg:h-16 w-auto object-contain mix-blend-multiply" src="/logos/ANC Logo.jpeg" alt="ANC Clinic Logo" />'
new_img = '<img className="h-12 md:h-14 lg:h-16 w-auto object-contain" src="/logos/ANC Logo.png" alt="ANC Clinic Logo" />'

if old_img in content:
    content = content.replace(old_img, new_img)
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(content)
    print("Updated Navbar.tsx")
else:
    print("Could not find the exact old img tag")
