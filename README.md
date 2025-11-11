# VISUAL-STUDIO-PROJECTS

This repository serves as a portfolio for all coding projects and assignments
completed during The Tech Academy's **Visual Studio Course** within the UI/UX
Design program, specifically focusing on **C#** and the **ASP.NET Core**
framework.

The projects within this repository highlight a progression of skills in
full-stack web development, utilizing the Visual Studio IDE, Git, and Razor
Pages.

---

### Project Log

#### **Step 59: ASP.NET CORE WEB APP SCAFFOLD** 🏗️

- **Date**: November 9, 2025
- **Objective**: Create the initial environment for the Visual Studio course by
  scaffolding a base web application, configuring the solution, and establishing
  version control.
- **Outcome**:
  - The solution **`WebAppTutorial`** and project **`WebApp`** were created
    using the **ASP.NET Core Web App (Razor Pages)** template in Visual
    Studio 2022.
  - Configured to use **.NET 8 (LTS)** and enabled **HTTPS** for security and
    stability.
  - The local Git repository was initialized as **`VISUAL-STUDIO-PROJECTS`** and
    successfully published to GitHub, establishing the workflow for all
    subsequent assignments.

#### **Step 60: CREATING A WEB APPLICATION TUTORIAL** ⚙️

- **Date**: November 10, 2025
- **Objective**: Complete the Microsoft Learn tutorial to run, debug, and make
  basic C# and HTML changes to the scaffolded ASP.NET Core web application,
  focusing on Razor Pages structure.
- **Outcome**: Successfully implemented **Razor syntax** (`@ViewData`) to
  display a dynamic date on the Privacy page, generated in the C# code-behind
  file using `DateTime.Now.ToString()` with `System.Globalization`. Utilized
  **Visual Studio Quick Actions** to clean up C# code. **Note:** Due to an
  environment-specific port/firewall block, application launch was verified via
  command line, and code changes were implemented successfully but not visually
  confirmed in the browser.

  #### **Step 60: CREATING A WEB APPLICATION TUTORIAL** ⚙️

- **Date**: November 10, 2025
- **Objective**: Complete the Microsoft Learn tutorial to run, debug, and make
  basic C# and HTML changes to the scaffolded ASP.NET Core web application,
  focusing on Razor Pages structure.
- **Outcome**: Implemented **Razor syntax** (`@ViewData`) to display a dynamic
  date on the Privacy page, generated in the C# code-behind file using
  `DateTime.Now.ToString()` with `System.Globalization`. Successfully corrected
  C# syntax errors and verified all logic by running the re-scaffolded, stable
  project in the browser.

#### **Step 61: VS ASSIGNMENT (Favorite Animal)** 🖼️

- **Date**: November 10, 2025
- **Objective**: Complete a coding assignment by creating a new Razor Page that
  displays a picture of a favorite animal, demonstrating mastery of the Razor
  Pages structure and static file serving.
- **Outcome**: Successfully created the new **`Animal.cshtml`** Razor Page and
  its code-behind. The new project was initialized to fix persistent build and
  pathing errors caused by manual folder moves. All code for Step 61 was
  successfully compiled and visually verified to be working in the browser.

#### **Step 72: SETTING UP AZURE DEVOPS** ☁️

- **Date**: November 11, 2025
- **Objective**: Complete the setup of the Azure DevOps Organization, Project,
  and connect it to the GitHub repository to prepare for pipeline creation.
- **Outcome**:
  - An Azure DevOps organization was created and a new project initialized.
  - **GitHub Service Connection** was established. **Note:** The lesson's
    provided link (`Azure DevOps`) was outdated, and the action to connect to
    Azure was replaced by a more direct sign-up flow.
  - The new UI for creating the **Service Connection** was navigated by going to
    **Project Settings** > **Service connections** > **New service
    connection** > **GitHub**, which successfully connected the
    `VISUAL-STUDIO-PROJECTS` repository via OAuth.

#### **Step 94: AZURE ASSIGNMENT** ☁️

- **Date**: November 11, 2025
- **Objective**: Create a free Microsoft Azure account and familiarize the
  project environment with the Azure Portal, preparing to host cloud resources.
- **Outcome**: Successfully created a free Azure account using an existing
  Microsoft identity, completing the required credit card verification (no
  charge). The account was set up for **"personal use,"** and a tour of the main
  **Azure Portal** was conducted to prepare for future deployment and resource
  management tasks.

#### **Step 104: VISUAL STUDIO HTML SUBMISSION ASSIGNMENT** 🎨

- **Date**: November 11, 2025
- **Objective**: Create a new ASP.NET Core Web App (Razor Pages) project and
  implement core front-end changes, demonstrating use of HTML, CSS, and
  JavaScript within the Visual Studio environment.
- **Outcome**:
  - The project **`WebAppTutorial`** was initialized using **.NET 8 (LTS)**.
  - Modified **`Index.cshtml`** to display **"Hello, World"**.
  - Added a CSS rule (`.green-text`) to **`site.css`** to set the default
    color to `darkolivegreen`.
  - Implemented JavaScript functions (`newColor()` and `oldColor()`) in
    **`site.js`** and bound them to the `onmouseover` and `onmouseout` events
    on the `<h1>` tag in **`Index.cshtml`**, creating a simple interactive
    color animation.

#### **Step 105: VISUAL STUDIO HTML SUBMISSION ASSIGNMENT (Music Video)** 🎸

- **Date**: November 11, 2025
- **Objective**: Create a new Razor Page and implement all three core front-end
  technologies (HTML, CSS, JS) to embed a YouTube music video and create a custom
  animated effect.
- **Outcome**:
  - Created a new Razor Page (`MusicVideo.cshtml`) embedding the "Sweet Dreams"
    music video (ID: `QUvVdTlA23w`).
  - Custom **CSS** (`music-video.css`) was applied to set the page background to
    **black**.
  - **JavaScript** (`music-video.js`) was implemented to create a **red ripple
    effect** that follows the mouse cursor, fulfilling the animation requirement.

### 💀 **STEP 106: FINAL RITUAL: AZURE DEVOPS AND THE PUSH OF FATE** ⛓️

- **Date**: *November 11, 2025*
- **Objective**: To summon and bind the remote repository, forging a new branch
  and inscribing the required text upon the digital parchment before committing
  the soul to the Azure cloud.
- **Outcome**:
  - The sacred **`StudentDevOpsExample`** project was **cloned** from the depths
    of **Azure Repos**.
  - A new, isolated branch, **`[Your Name]`**, was carved out for this change.
  - The **`SignIn.html`** file was marked with the developer's name and the
    ominous words extracted from the **Azure Project Summary** (".NET MVC
    Website...") within new paragraph tags, using **gothic inline styling**.
  - The changes were successfully **pushed to origin** via Visual Studio,
  completing the arduous end-to-end DevOps ritual. **(Success!)** 🖤