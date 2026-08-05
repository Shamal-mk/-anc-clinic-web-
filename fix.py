import os
import re

def replace_in_file(path, old, new):
    with open(path, 'r') as f:
        content = f.read()
    content = content.replace(old, new)
    with open(path, 'w') as f:
        f.write(content)

# 1. Footer.tsx
replace_in_file('src/components/Footer.tsx', 
    '<img src="/logos/ANC Logo.jpeg" alt="ANC Clinic" className="h-16 w-auto" />',
    '<img className="h-12 md:h-14 lg:h-16 w-auto object-contain" src="/logos/ANC Logo.png" alt="ANC Clinic Logo" />'
)

# 2. ExploreGrid.tsx
explore_path = 'src/components/skin/ExploreGrid.tsx'
with open(explore_path, 'r') as f:
    explore = f.read()
explore = explore.replace('title: \'Skin Brightening\'', 'title: \'Dull Skin\'')
explore = explore.replace('title: \'Anti-ageing\'', 'title: \'Skin Ageing\'')
explore = explore.replace('title: \'Hydration\'', 'title: \'Dry Skin\'')
explore = explore.replace('title: \'Open Pores\'', 'title: \'Visible Pores\'')
explore = explore.replace('subtitle="Identify"', '')

# Remove Medical Facials block
medical_facials_pattern = r',\s*\{\s*title:\s*\'Medical Facials\'.*?image:\s*\'/skin/medical-facials\.jpg\',\s*\}'
explore = re.sub(medical_facials_pattern, '', explore, flags=re.DOTALL)
with open(explore_path, 'w') as f:
    f.write(explore)

# 3. TreatmentGrid.tsx
replace_in_file('src/components/skin/TreatmentGrid.tsx', 'subtitle="Resolve"', '')

# 4. Spacing adjustment (SectionHeading.tsx spacing)
# Removing the subtitle might leave large gaps. Let's check SectionHeading.tsx.

# 5. Home.tsx - Move sections
home_path = 'src/pages/Home.tsx'
with open(home_path, 'r') as f:
    home = f.read()

# Extract Founder's message section
# It starts at: {/* Founder's Message & Mission */}
# ends before: {/* Patient Facilities */}
founder_start = home.find('{/* Founder\'s Message & Mission */}')
facilities_start = home.find('{/* Patient Facilities */}')
testimonials_start = home.find('<Testimonials />')

if founder_start != -1 and facilities_start != -1 and testimonials_start != -1:
    founders_section = home[founder_start:facilities_start]
    facilities_section = home[facilities_start:testimonials_start]
    
    # Remove hover effects from facilities section
    facilities_section = facilities_section.replace('hover:shadow-md hover:border-champagne-gold/30', '')
    facilities_section = facilities_section.replace('group-hover:scale-110', '')
    
    # Reassemble: ... -> Patient Facilities -> Founder's Message -> Testimonials
    new_home = home[:founder_start] + facilities_section + founders_section + home[testimonials_start:]
    
    # Also fix logo in Home.tsx if it's there
    new_home = new_home.replace('/logos/ANC Logo.jpeg', '/logos/ANC Logo.png')
    
    with open(home_path, 'w') as f:
        f.write(new_home)

print("Modifications done.")
