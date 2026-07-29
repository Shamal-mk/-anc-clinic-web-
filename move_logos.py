import os
import shutil

src_dir = "/Users/shamalmohamedmk/Desktop/ANC CLINIC"
dest_dir = "/Users/shamalmohamedmk/Desktop/ANC CLINIC/anc-clinic-web/public/logos"

os.makedirs(dest_dir, exist_ok=True)

files = [
    "ANC Logo.jpeg",
    "Dr. Unnikrishnans samsara ayurveda unit  Logo.jpeg",
    "Cvn Kalari Logo.jpg"
]

for f in files:
    src_path = os.path.join(src_dir, f)
    if os.path.exists(src_path):
        dest_path = os.path.join(dest_dir, f)
        shutil.copy2(src_path, dest_path)
        print(f"Copied {f}")
    else:
        print(f"Not found: {f}")

# Also copy the generated logo
generated_logo = "/Users/shamalmohamedmk/.gemini/antigravity-ide/brain/04e4969c-7081-481a-ba8d-715a60cef12a/skin_cosmetology_logo_1785344343216.png"
if os.path.exists(generated_logo):
    dest_generated = os.path.join(dest_dir, "Skin & Cosmetology Logo.png")
    shutil.copy2(generated_logo, dest_generated)
    print("Copied Generated Logo")

