document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const closeBtn = document.getElementById("close-btn");

    closeBtn.addEventListener("click", function() {
        console.log('Button clicked'); // Check if the click event is fired
        slider.classList.toggle("open");
        closeBtn.classList.toggle("open");
    });

    // JSON data
    const data = {
        "_id": {"$oid": "63b64dc9e3b230ebb60a495d"},
        "_key": "topic:2085",
        "category": "Course",
        "cid": {"$numberDouble": "NaN"},
        "commitment": "4 hours",
        "commitment_type": "custom",
        "deadline": "",
        "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
        "faqs": [],
        "globalTags": [],
        "isActive": true,
        "lastposttime": 0,
        "learning_outcomes": [
            "Bare minimum knowledge of project management",
            "4SA Concept",
            "Would be able to handle any project efficiently"
        ],
        "mainPid": 0,
        "postcount": 0,
        "pre_requisites": [
            "An open mind to learn any concept",
            "Thought of Unlearning and Relearning "
        ],
        "project_image": "https://deepthought.education/assets/images/logo/logo.svg",
        "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
        "slug": "2085/technical-project-management",
        "status": "published",
        "tasks": [
            {
                "task_id": 18882,
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
                "status": "notworkyet",
                "assets": [
                    {
                        "asset_id": 18883,
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_type": "display_asset",
                        "asset_content_type": "video"
                    },
                    {
                        "asset_id": 18884,
                        "asset_title": "Threadbuild",
                        "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                        "asset_content": "",
                        "asset_type": "input_asset",
                        "asset_content_type": "threadbuilder"
                    },
                    {
                        "asset_id": 18885,
                        "asset_title": "Structure you pointers",
                        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                        "asset_content": "",
                        "asset_type": "input_asset",
                        "asset_content_type": "article"
                    },
                    {
                        "asset_id": 18886,
                        "asset_title": "4SA Method",
                        "asset_description": "To explore more read more",
                        "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                        "asset_type": "display_asset",
                        "asset_content_type": "article"
                    }
                ]
            }
        ],
        "tid": 2085,
        "timestamp": 1672891849700,
        "title": "Technical Project Management",
        "type": "project",
        "uid": 100,
        "viewcount": 0,
        "publishedAt": 1672893847792
    };

    populateContent(data);

    function populateContent(data) {
        // Populate the title
        document.getElementById("title").textContent = data.title;

        // Populate the heading
        const tasks = data.tasks[0];
        document.getElementById("heading-title").textContent = tasks.task_title;
        document.getElementById("heading-description").textContent = tasks.task_description;

        // Populate the sections
        const assets = tasks.assets;
        document.getElementById("first-block-title").innerHTML = assets[0].asset_title + ' <i class="fa-solid fa-circle-info" style="color: #f7f7f7;background-color: #333;"></i>';
        document.getElementById("first-block-description").innerHTML = 'Description:<p>' + assets[0].asset_description + '</p>';
        if (assets[0].asset_content_type === "video") {
            document.getElementById("first-block-content").innerHTML = `<iframe width="560" height="315" src="${assets[0].asset_content}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }

        document.getElementById("second-block-title").textContent = assets[1].asset_title;
        document.getElementById("second-block-description").innerHTML = 'Description:<p>' + assets[1].asset_description + '</p>';

        document.getElementById("third-block-title").textContent = assets[2].asset_title;
        document.getElementById("third-block-description").innerHTML = 'Description:<p>' + assets[2].asset_description + '</p>';

        document.getElementById("fourth-block-title").textContent = assets[3].asset_title;
        document.getElementById("fourth-block-description").innerHTML = 'Description:<p>' + assets[3].asset_description + '</p>';
        if (assets[3].asset_content_type === "article") {
            document.getElementById("fourth-block-content").innerHTML = `<a href="${assets[3].asset_content}" target="_blank">Read More</a>`;
        }

        // Populate the project image
        document.querySelector(".head img").src = data.project_image;
    }
});
