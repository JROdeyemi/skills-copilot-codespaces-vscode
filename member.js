function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");
  var memberSkillsBtn = document.getElementById("member-skills-btn");
  var memberSkillsBtnIcon = document.getElementById("member-skills-btn-icon");
  var memberSkillsBtnText = document.getElementById("member-skills-btn-text");

  if (memberSkills.style.display === "none") {
    memberSkills.style.display = "block";
    memberSkillsBtn.style.backgroundColor = "#f5f5f5";
    memberSkillsBtn.style.color = "#333";
    memberSkillsBtnIcon.style.transform = "rotate(180deg)";
    memberSkillsBtnText.innerHTML = "Close";
  } else {
    memberSkills.style.display = "none";
    memberSkillsBtn.style.backgroundColor = "#333";
    memberSkillsBtn.style.color = "#f5f5f5";
    memberSkillsBtnIcon.style.transform = "rotate(0deg)";
    memberSkillsBtnText.innerHTML = "Skills";
  }
} 