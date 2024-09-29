document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const output = document.querySelector(".output");
  const jumpscare = document.getElementById("jumpscare");
  const password = "secret";
  // console.log("The secret command is '" + password + "' itself");
  console.log("The secret command is '\x1b[1m" + password + "\x1b[0m' itself");
  console.log("'secret' command was inspired by ForrestKnight");

  const asciiArt = `
       )            (
      /(   (\\___/)  )\\  _____________
     ( #)  \\ (- -) ( # |        '\\\\\\
      ||___c\\   >'__|  |        ' ____|_
      ||**** )\`_/ **'  |   +    '||::::::
.__   |'* ___| |___*'  |        '||_____|
 \\_|  |'*(    ~   ,)'  \\'_______|_____|
   )) |' /(.  '  .)\\   ___/____|___\\___
  (( _""";!___*_____\\_|    _    '  <<<:|
    /     /|          |_________'___o_o| b'ger
   /_____/ /
   |:____|/  "Boy, I love this stuff".

------------------------------------------------
This ASCII pic can be found at
https://asciiart.website/index.php?art=objects/computers
`;

  function setColorScheme(color) {
    const root = document.documentElement;
    switch (color) {
      case "green":
        root.style.setProperty("--background-color", "#1e1e1e");
        root.style.setProperty("--text-color", "#00ff00");
        root.style.setProperty("--terminal-background-color", "#000000");
        root.style.setProperty("--prompt-color", "#00ff00");
        break;
      case "electron":
        root.style.setProperty("--background-color", "#000033");
        root.style.setProperty("--text-color", "#0FF0FC");
        root.style.setProperty("--terminal-background-color", "#000025");
        root.style.setProperty("--prompt-color", "#00ccff");
        break;
      case "red":
        root.style.setProperty("--background-color", "#330000");
        root.style.setProperty("--text-color", "#ff0000");
        root.style.setProperty("--terminal-background-color", "#110000");
        root.style.setProperty("--prompt-color", "#ff0000");
        break;
      case "solarized":
        root.style.setProperty("--background-color", "#002b36");
        root.style.setProperty("--text-color", "#839496");
        root.style.setProperty("--terminal-background-color", "#073642");
        root.style.setProperty("--prompt-color", "#b58900");
        break;
      default:
        return `Color scheme not found: ${color}`;
    }
    return `Color scheme set to ${color}`;
  }

  function executeCommand(command) {
    const args = command.split(" ");
    const cmd = args[0].toLowerCase();
    let response = "";
    let message = ""; // Declare message variable here

    switch (cmd) {
      case "help":
        message = `Available commands:\n<span class="command ">[1] help</span>\t\t<span style="color: #f88236;">To deal with this website</span>\n<span class="command ">[2] whois</span>\t\t<span style="color: #f88236;">Who is Shashank V H</span>\n<span class="command ">[3] clear</span>\t\t<span style="color: #f88236;">To Clear the screen</span>\n<span class="command ">[4] color</span>\t\t<span style="color: #f88236;">To select the color of you choice</span>\n<span class="command ">[5] Projects</span>\t\t<span style="color: #f88236;">To see my projects</span>\n<span class="command ">[6] social</span>\t\t<span style="color: #f88236;">Social Networks</span>\n<span class="command ">[7] email</span>\t\t<span style="color: #f88236;">Email me</span>\n<span class="command ">[8] banner</span>\t\t<span style="color: #f88236;">To see the initial ascii-art</span>\n<span class="command ">[9] secret</span>\t\t<span style="color: #f88236;">Top secret</span>\n<span class="command ">[10] donot</span>\t\t<span style="color: #f88236;">As the command itself say don't enter it</span>`;
        printWithDelay(message);
        return;
      case "ls":
        window.open(
          "https://media.tenor.com/mZZoOtDcouoAAAAM/stop-it-get-some-help.gif",
          "_blank",
        );
        message = `enter <span class='command'>'help'</span>`;
        printWithDelay(message);
        return;
      case "whoami":
        response =
          "<a href='https://ShashankVH.pythonanywhere.com' target='_blank'>https://ShashankVH.pythonanywhere.com</a>";
        break;
      case "pwd":
        response = "You're in my website";
        break;
      case "whois":
        // message = `<span class="paragraph">Hey, I'm Shashank V H! 👋</span>
          message = `<span class="paragraph">Hello, I’m Shashank V H.</span>
          <span class="paragraph">I’m a final year Information Science Engineering student with a deep passion for technology and problem-solving.</span> 
          <span class="paragraph">Whether it's creating user-friendly websites, developing documentation platforms that simplify complex information,</span> 
          <span class="paragraph">or automating daily tasks using my programming skills, I enjoy leveraging technology to innovate and improve efficiency.</span>
          <span class="paragraph">I’m constantly exploring the latest tech trends and working on projects that challenge my abilities, as I believe in continuous learning and growth.</span>
          <span class="paragraph">My enthusiasm extends beyond coding, and I’m always looking for new ideas to explore.</span>
          <span class="paragraph">In my downtime, you might find me brainstorming for fresh ideas, enjoying a cup of tea, or reflecting on the endless possibilities of technology.</span>
          <span class="paragraph">If you’re interested in discussing technology, brainstorming ideas, or even collaborating on a project, feel free to connect.</span> 
          <span class="paragraph">Let’s create something remarkable together.</span>`;
        printWithDelay(message);
        response = whois;
        break;
      case "clear":
        output.innerHTML = "";
        return;
      case "color":
        if (args[1]) {
          response = setColorScheme(args[1].toLowerCase());
        } else {
          response =
            'Usage: color [<span class="command ">green</span>|<span class="command ">electron</span>|<span class="command ">red</span>|<span class="command ">solarized</span>]';
        }
        lineprint(response, "paragraph", 100);
        return;
      case "donot":
        const newWindow = window.open("", "_blank");
        newWindow.document.write(
          `<img src="https://i.makeagif.com/media/12-10-2015/PlIsV8.gif" style="width:100%; height:100%;"/>`,
        );
        newWindow.document.close();
        return;
      case "skills":
        message = `Skills:\n<span class="command ">C</span>\n<span class="command ">C++</span>\n<span class="command ">Data Structures and algorithms</span>\n<span class="command ">Front-End Web Development </span>\n<span class="command ">Django for backend</span>\n<span class="command ">Shell Scripting</span>\n<span class="command ">SQL, SQLite</span>\n<span class="command ">Python</span>\n<span class="command ">Java</span>\n<span class="command ">Unix/linux</span>`;
        printWithDelay(message);
        break;
      case "projects":
        message = `Projects:\n<span class="command ">Django_Documentation_website:</span>\n<span style="color: #f88236;">A comprehensive documentation website for the VTU 6th Semester Fullstack Development Lab programs. This site provides </span>\n<span style="color: #f88236;">detailed guides, video summaries, and downloadable resources for each lab exercise.</span>\n[Live Link]: 👉 <a href='https://ShashankVH.pythonanywhere.com' target='_blank'><u>https://ShashankVH.pythonanywhere.com</u></a>\n-----------------------------------------------------------------------------------------------------------------------------------------\n<span class="command ">Game and Gamers Data storage:</span>\n<span style="color: #f88236;">A C program which has multiple games and demonstrates how the users data gets stored when users play the game</span>\n[Github Link]:👉 <a href='https://github.com/Shashank-V-H/DSA_project_code.git' target='_blank'><u>DSA C program</u></a>\n-----------------------------------------------------------------------------------------------------------------------------------------\n<span class="command">SQL playground:</span>\n<span style="color: #f88236;">A web app for interactive SQL querying with SQLite databases.</span>\n<span style="color: #f88236;">Implemented features for schema viewing, query execution, and solving questions which are relevant to the database selected.</span>\n[Live Link]: 👉 <a href='https://sql-playground-4vog.onrender.com/' target='_blank'><u>SQL Playgound</u></a>\n-----------------------------------------------------------------------------------------------------------------------------------------`;
        printWithDelay(message);
        break;
      case "social":
        message = `\n<span class="command ">linkedin</span>\t\t<a style="color: #f88236; "href="https://www.linkedin.com/in/shashank-v-ha13538229/">linkedine/Shashank V H</a>`;
        printWithDelay(message);
        break;
      case "email":
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=shashankvmh4@gmail.com&su=Contacting%20through%20Portfolio",
          "_blank",
        );
        response = `Opening mailto: Shankshank V H...`;
        break;
      case "banner":
        printWithDelay(asciiArt); // Print ASCII art with delay
        break;
      case "secret":
        let secretKey = prompt("Enter the secret key:");
        if (secretKey === "secret") {
          const newWindow = window.open(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "_blank",
          );
          newWindow.document.close();
        } else {
          alert("Incorrect secret key. Try again!");
        }
        break;
      case "shit":
        response = `💩 remeber to flush with <span class="command";>clear</span> command`;
        break;
      default:
        response = `Command not found: ${cmd}\n-> try <span class=command>help</span>\n`;
    }

    return response;
  }

  function printOutput(text) {
    const newLine = document.createElement("div");
    newLine.innerHTML = text;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
  }

  function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
      } else {
        t += text.charAt(i);
      }
    }
    setTimeout(function () {
      var next = document.createElement("p");
      next.innerHTML = t;
      next.className = style;

      output.appendChild(next);
      output.scrollTop = output.scrollHeight;
    }, time);
  }

  function loopLines(lines, style, delay) {
    lines.forEach(function (line, index) {
      setTimeout(function () {
        addLine(line, style, 0);
      }, index * delay);
    });
  }

  function lineprint(text, style, delay) {
    const lines = text.split("\n");
    loopLines(lines, style, delay);
  }

  function printWithDelay(text) {
    const lines = text.split("\n");

    let lineIndex = 0;

    const interval = setInterval(() => {
      const line = lines[lineIndex];
      printOutput(line + "<br>");

      lineIndex++;

      if (lineIndex === lines.length) {
        clearInterval(interval);
      }
    }, 100);
  }

  function handleInput(event) {
    if (event.key === "Enter") {
      const command = input.value.trim();
      input.value = "";

      printOutput(
        `<span class="prompt">visitor@SVH's_website.com:~$</span> ${command}`,
      );
      const result = executeCommand(command);
      if (result) printOutput(result);
    }
  }

  input.addEventListener("keydown", handleInput);
});
