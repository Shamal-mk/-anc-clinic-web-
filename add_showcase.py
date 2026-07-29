import re

with open('src/pages/Cosmetology.tsx', 'r') as f:
    content = f.read()

import_statement = "import ClinicShowcase from '../components/skin/ClinicShowcase';\n"
if "import ClinicShowcase" not in content:
    content = content.replace("import SkinHero", import_statement + "import SkinHero")

target = "{/* 3. Skin Concerns (Identify) */}"
replacement = """      {/* Clinic Showcase */}
      <ClinicShowcase />

      {/* 3. Skin Concerns (Identify) */}"""

if "ClinicShowcase />" not in content:
    content = content.replace(target, replacement)

with open('src/pages/Cosmetology.tsx', 'w') as f:
    f.write(content)
print("Added ClinicShowcase to Cosmetology.tsx")
