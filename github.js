// import TOKEN from "./config";

// GraphQL Query:

const QUERY = "query { \
  user(login: \"jjcavallo5\"){\
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
}"

const generateGithubContributionGraph = () => {
    
}


getGithubContributions = async () => {
    let response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify({"query": QUERY})
    })

    let json = await response.json()
    console.log(json)
}

testThisFile = () => {
    console.log('test')
}