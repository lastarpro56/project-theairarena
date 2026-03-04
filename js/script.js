function calculateSetup() {
    let version = document.getElementById("mcVersion").value;
    let ram = parseInt(document.getElementById("ramInput").value);
    let players = parseInt(document.getElementById("playerInput").value);
    let type = document.getElementById("serverType").value;

    if (!ram || !players) {
        document.getElementById("result").innerText = "Please fill all fields.";
        return;
    }

    let baseRam = players * 0.3;

    if (type === "modded") {
        baseRam += 2;
    }

    let recommendedRam = Math.min(Math.floor(baseRam), ram - 2);

    if (recommendedRam < 2) {
        recommendedRam = 2;
    }

    let software = "";

    if (type === "vanilla") {
        software = "Use Official Vanilla Server.";
    } else if (type === "paper") {
        software = "Use Paper for better TPS and performance.";
    } else {
        software = "Use Fabric or Forge for modded gameplay.";
    }

    // Performance rating (MUST be inside function)
    let rating = "";

    if (recommendedRam >= 6) {
        rating = "High Performance Server 🟢";
    } else if (recommendedRam >= 4) {
        rating = "Moderate Performance 🟡";
    } else {
        rating = "Basic Server Only 🔴";
    }

    document.getElementById("result").innerHTML =
        "<strong>Minecraft Version:</strong> " + version + "<br><br>" +
        "<strong>Recommended RAM Allocation:</strong> " + recommendedRam + "GB<br><br>" +
        "<strong>Suggested Software:</strong> " + software + "<br><br>" +
        "<strong>Performance Rating:</strong> " + rating + "<br><br>" +
        "<strong>Launch Command:</strong><br>" +
        "java -Xmx" + recommendedRam + "G -Xms" + recommendedRam + "G -jar server.jar nogui";
}
