// GraphQL Query:

const QUERY =
    'query { \
  user(login: "jjcavallo5"){\
    contributionsCollection {\
      contributionCalendar {\
        totalContributions\
        weeks {\
          contributionDays {\
            contributionCount\
            date\
          }\
        }\
      }\
    }\
  }\
}';

const COLORS = ["#80008066", "#80008099", "#800080aa", "#800080ff"];

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const generateGithubContributionGraph = (contributions_json) => {
    const AT_830 = 28;
    const AT_575 = 14;
    const AT_1240 = "whole";

    let contributions =
        contributions_json["data"]["user"]["contributionsCollection"]["contributionCalendar"][
            "weeks"
        ];

    if (window.innerWidth < 575) contributions = contributions.slice(-14);
    else if (window.innerWidth < 1240) contributions = contributions.slice(-28);
    let totalContributions =
        contributions_json["data"]["user"]["contributionsCollection"]["contributionCalendar"][
            "totalContributions"
        ];

    let container = document.getElementsByClassName("github-graph-container")[0];
    let contributionsElement = document.getElementById("total-contributions");
    contributionsElement.innerHTML = `Total Contributions: ${totalContributions}`;

    let maxDailyContribution = 0;
    for (let i = 0; i < contributions.length; i++) {
        for (let j = 0; j < contributions[i]["contributionDays"].length; j++) {
            let contributionNumber = contributions[i]["contributionDays"][j]["contributionCount"];
            if (contributionNumber > maxDailyContribution)
                maxDailyContribution = contributionNumber;
        }
    }

    for (let i = 0; i < contributions.length; i++) {
        for (let j = 0; j < contributions[i]["contributionDays"].length; j++) {
            let contributionNumber = contributions[i]["contributionDays"][j]["contributionCount"];
            let contributionDate = new Date(contributions[i]["contributionDays"][j]["date"]);
            let color = "#2d333b";
            if (contributionNumber > 0) color = COLORS[0];
            if (contributionNumber > maxDailyContribution / 4) color = COLORS[1];
            if (contributionNumber > maxDailyContribution / 2) color = COLORS[2];
            if (contributionNumber > maxDailyContribution * 0.75) color = COLORS[3];
            let block = document.createElement("div");
            let tooltip = document.createElement("p");
            block.classList.add("github-day-block");
            tooltip.classList.add("github-tooltip");
            tooltip.innerHTML = `${contributionNumber} contribution${
                contributionNumber == 1 ? "" : "s"
            } on ${DAYS[contributionDate.getUTCDay()]}, ${
                MONTHS[contributionDate.getUTCMonth()]
            } ${contributionDate.getUTCDate()}, ${contributionDate.getUTCFullYear()}`;
            block.appendChild(tooltip);
            block.style = `height: 0.75rem; width: 0.75rem; background-color: ${color}; margin: 0.15rem; border-radius: 3px`;
            container.appendChild(block);
            console.log("Block added");
        }
    }
};

getGithubContributions = async () => {
    let response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ query: QUERY }),
    });

    let json = await response.json();
    // console.log(json)
    generateGithubContributionGraph(json);
};

displayGithubRecentActivity = (activity) => {
    console.log(activity);
};
