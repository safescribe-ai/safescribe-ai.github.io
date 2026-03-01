# Formspree setup – step-by-step (beginner)

The waitlist form on your site sends responses to **Formspree**. Follow these steps so submissions go to your Formspree inbox.

---

## Part 1: Create your Formspree form and get the form ID

1. **Open Formspree**
   - In your browser, go to: **https://formspree.io**

2. **Sign up or log in**
   - Click **Get Started** (or **Login** if you already have an account).
   - Sign up with your email, or use “Sign in with Google” if you prefer.

3. **Create a new form**
   - After logging in, click **+ New Form** (or **New form**).
   - Give it a name, e.g. **SafeScribe Waitlist**.
   - Click **Create Form** (or **Create**).

4. **Copy your form ID**
   - Formspree will show you an endpoint URL that looks like:
     - `https://formspree.io/f/xyzabcde`
   - The **form ID** is the last part: `xyzabcde` (yours will be different).
   - Copy that short ID (e.g. `xyzabcde`) and keep it somewhere — you’ll use it in the next two parts.

---

## Part 2: Use the form when testing on your own computer (optional)

Only do this if you run the site locally with `npm run dev` and want the form to work there.

1. **Open the project folder**
   - In Finder (Mac) or File Explorer (Windows), go to the folder that contains your SafeScribe website (the one with `package.json` in it).

2. **Create a file named `.env`**
   - In that same folder, create a new file.
   - Name it exactly: **`.env`** (starts with a dot, no .txt).
   - On Mac: in TextEdit, create the file and use “Save As”, then type `.env` as the name. Or in Terminal, from the project folder, run: `touch .env`.

3. **Put your form ID in `.env`**
   - Open `.env` in any text editor.
   - Type this on a single line (replace `xyzabcde` with your real form ID):
     ```
     VITE_FORMSPREE_FORM_ID=xyzabcde
     ```
   - Save the file.

4. **Restart your dev server**
   - In the terminal, stop the site (Ctrl+C), then run `npm run dev` again.
   - Fill out the form on the Get Started page; the submission should show up in your Formspree dashboard.

---

## Part 3: Use the form on the live site (GitHub Pages)

So that the **published** site (e.g. https://safescribe-ai.github.io) sends submissions to Formspree:

1. **Go to your GitHub repo**
   - In your browser, open: **https://github.com/safescribe-ai/safescribe-ai.github.io**

2. **Open repo Settings**
   - Click the **Settings** tab (top of the repo page, next to “Code”, “Issues”, etc.).

3. **Open “Secrets and variables” for Actions**
   - In the left sidebar, under **Security**, click **Secrets and variables** → **Actions**.

4. **Add a variable**
   - Click the **Variables** tab (next to “Secrets”).
   - Click **New repository variable**.

5. **Name and value**
   - **Name:** type exactly: **`VITE_FORMSPREE_FORM_ID`**
   - **Value:** paste your Formspree form ID (the short part, e.g. `xyzabcde`).
   - Click **Add variable**.

6. **Redeploy the site**
   - Go to the **Actions** tab in the repo.
   - Click the workflow **“Deploy to GitHub Pages”** on the left.
   - On the right, click **Run workflow** → **Run workflow**.
   - Wait until the run turns green (a couple of minutes). After that, the live site will use your Formspree form.

---

## Where do responses go?

- **Formspree dashboard:** https://formspree.io → log in → open your form. All submissions appear there.
- **Email (optional):** In Formspree, you can turn on email notifications so each new submission is sent to your inbox.

---

## Quick checklist

- [ ] Signed up at formspree.io and created a form  
- [ ] Copied the form ID (the part after `/f/` in the URL)  
- [ ] (Optional) Created `.env` in the project folder with `VITE_FORMSPREE_FORM_ID=your_id` for local testing  
- [ ] In GitHub: Settings → Secrets and variables → Actions → Variables  
- [ ] Added variable `VITE_FORMSPREE_FORM_ID` with your form ID  
- [ ] Ran “Deploy to GitHub Pages” in the Actions tab and waited for it to succeed  

After that, both your local and live site will send waitlist responses to Formspree.
