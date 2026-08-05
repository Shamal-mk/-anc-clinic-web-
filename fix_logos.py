import os
import glob

def replace_in_files(directory, replacements):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                
                original = content
                for old, new in replacements.items():
                    content = content.replace(old, new)
                
                if original != content:
                    with open(path, 'w') as f:
                        f.write(content)
                    print(f"Updated {path}")

replacements = {
    '/logos/Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg': '/logos/ANC Logo.png',
    '/logos/Cvn Kalari Logo.jpg': '/logos/ANC Logo.png',
    '/logos/Skin & Cosmetology Logo.png': '/logos/ANC Logo.png',
    '/logos/ANC Logo.jpeg': '/logos/ANC Logo.png'
}

replace_in_files('src', replacements)
print("Logo replacements completed.")
