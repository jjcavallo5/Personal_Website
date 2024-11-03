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
    generateGithubContributionGraph(json);
};

displayGithubRecentActivity = (activity) => {
    let events = activity["data"];
    let container = document.querySelector(".github-events-container");
    let repositories = {};

    for (let i = 0; i < events.length; i++) {
        if (events[i]["type"] == "PushEvent") {
            if (events[i]["public"]) {
                if (!Object.keys(repositories).includes(events[i]["repo"]["name"]))
                    repositories[events[i]["repo"]["name"]] = 1;
                else repositories[events[i]["repo"]["name"]]++;
            } else {
                if (!Object.keys(repositories).includes("private")) repositories["private"] = 1;
                else repositories["private"]++;
            }
        }
    }

    let pushEventsBlock = document.createElement("div");
    pushEventsBlock.classList.add("push-events");
    pushEventsBlock.innerHTML = `<svg id='push-event-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12M15 12H21M9 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <h3 id='push-events-header' >Commited to ${Object.keys(repositories).length} repositor${
        Object.keys(repositories).length == 1 ? "y" : "ies"
    }</h3>`;
    for (let i = 0; i < Object.keys(repositories).length; i++) {
        if (Object.keys(repositories)[i] != "private") {
            pushEventsBlock.innerHTML += `<span class='github-push-event'>
          <a href=https://github.com/${
              Object.keys(repositories)[i]
          } id='github-repo-link' target='_blank'>${Object.keys(repositories)[i]}</a> <p>${
                repositories[Object.keys(repositories)[i]]
            } commits</p>
          </span>`;
        } else {
            pushEventsBlock.innerHTML += `<span class='github-push-event'>
            <p>${repositories[Object.keys(repositories)[i]]} commit${
                repositories[Object.keys(repositories)[i]] == 1 ? "" : "s"
            } in private repositories</p>
          </span>`;
        }
    }

    container.appendChild(pushEventsBlock);
};
