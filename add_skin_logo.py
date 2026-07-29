import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

target = """              {/* Parallax Background Glow */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-champagne-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700" />"""

replacement = """              {/* Embedded High-Fidelity Header Logo */}
              <div className="w-full flex justify-center mb-8 bg-white py-4 px-6 rounded-[16px] border border-platinum-slate/20">
                <img
                  src="/logos/Skin & Cosmetology Logo.png"
                  alt="Skin & Cosmetology Logo"
                  className="h-16 w-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Parallax Background Glow */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-champagne-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700" />"""

if target in content:
    content = content.replace(target, replacement)
    with open('src/pages/Home.tsx', 'w') as f:
        f.write(content)
    print("Added Skin Logo")
else:
    print("Could not find target in Home.tsx")

