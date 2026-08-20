import os
import re

directory = "/Users/ayushop27/Desktop/projects/pratiksha_portfolio/src/components/bento"

restorations = {
    "AvatarChiclet.tsx": ['gradientClass="bg-gradient-to-b from-cyan-600 via-blue-700 to-indigo-950 text-white"'],
    "TerminalChiclet.tsx": ['gradientClass="bg-slate-950 text-white border border-slate-800"'],
    "ExperienceChiclet.tsx": ['gradientClass="bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 text-white"'],
    "NowPlayingChiclet.tsx": ['gradientClass="bg-fuchsia-950 text-white"'],
    "WeatherChiclet.tsx": ['gradientClass="bg-gradient-to-b from-sky-500 via-blue-700 to-indigo-900 text-white"'],
    "TechStackChiclet.tsx": ['gradientClass="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white"'],
    "QuoteChiclet.tsx": ['gradientClass="bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white"'],
    "PhilosophyChiclet.tsx": ['gradientClass="bg-lime-400 text-slate-950 cursor-pointer select-none"'],
    "VerticalBannerChiclet.tsx": ['gradientClass="bg-gradient-to-b from-indigo-900 via-purple-950 to-slate-950 text-slate-100"'],
    "FlagshipProjectChiclet.tsx": ['gradientClass="bg-gradient-to-b from-amber-600 via-orange-700 to-rose-900 text-white"'],
    "NewsletterChiclet.tsx": ['gradientClass="bg-gradient-to-b from-sky-950 via-slate-900 to-indigo-950 text-white"']
}

for filename, lines in restorations.items():
    filepath = os.path.join(directory, filename)
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            content = f.read()
        
        # Replace gradientClass="..."
        def repl(match):
            return lines[0]
            
        new_content = re.sub(r"gradientClass=\"bg-[^\"]+\"", repl, content)
        with open(filepath, "w") as f:
            f.write(new_content)

# Handle SocialChicletsRow.tsx specifically (3 items)
social_path = os.path.join(directory, "SocialChicletsRow.tsx")
if os.path.exists(social_path):
    with open(social_path, "r") as f:
        content = f.read()
    
    replacements = [
        'gradientClass="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 hover:brightness-110 text-white"',
        'gradientClass="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 hover:brightness-110 text-white"',
        'gradientClass="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 hover:brightness-110 text-white"'
    ]
    
    idx = 0
    def repl_social(match):
        global idx
        val = replacements[idx]
        idx += 1
        return val
        
    new_content = re.sub(r"gradientClass=\"bg-[^\"]+\"", repl_social, content)
    with open(social_path, "w") as f:
        f.write(new_content)

# Handle ProjectChicletTile.tsx specifically
project_tile_path = os.path.join(directory, "ProjectChicletTile.tsx")
if os.path.exists(project_tile_path):
    with open(project_tile_path, "r") as f:
        content = f.read()
        
    # Replace the COLOR_MAP backgrounds
    content = re.sub(r"\"ai-disaster-rover\": {\s*bg: \"bg-[^\"]+\"", "\"ai-disaster-rover\": {\\n    bg: \"bg-gradient-to-br from-amber-600 via-orange-700 to-rose-950 text-white\"", content)
    content = re.sub(r"\"dbms-sql-platform\": {\s*bg: \"bg-[^\"]+\"", "\"dbms-sql-platform\": {\\n    bg: \"bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-950 text-white\"", content)
    content = re.sub(r"\"uiux-canva-design-studio\": {\s*bg: \"bg-[^\"]+\"", "\"uiux-canva-design-studio\": {\\n    bg: \"bg-gradient-to-br from-pink-600 via-rose-700 to-purple-950 text-white\"", content)
    content = re.sub(r"\"dsa-algorithms-suite\": {\s*bg: \"bg-[^\"]+\"", "\"dsa-algorithms-suite\": {\\n    bg: \"bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-950 text-white\"", content)
    
    # Replace default background
    content = re.sub(r"bg: \"bg-[^\"]+\",\s*text: \"text-white\",\s*badge: \"bg-black/40 text-slate-200\"", "bg: \"bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white\",\\n    text: \"text-white\",\\n    badge: \"bg-black/40 text-slate-200\"", content)
    
    with open(project_tile_path, "w") as f:
        f.write(content)

print("Restoration complete.")
