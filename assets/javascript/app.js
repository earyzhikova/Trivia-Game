var quiz = $("#app");

var allQuestions = [{
            question: "What state's motto is 'North to Future'?",
            choices: ["North Dakota", "Alaska", "Montana", "Maine"],
            correctAnswer: "Alaska"
        },

        {
            question: "What southeastern state boasts the cities of Frog Jump, Only, and Sweet Lips?",
            choices: ["Georgia", "South Carolina", "Tennessee", "Florida"],
            correctAnswer: "Tennessee"
        },

        {
            question: 'What southern U.S. city is sometimes nicknamed "Little Cuba"?',
            choices: ["Key West", "Miami", "Cuba City", "Jacksonville"],
            correctAnswer: "Miami"
        },

        {
            question: "What state leads the nation in copper production?",
            choices: ["North Dakota", "South Dakota", "Montana", "Arizona"],
            correctAnswer: "Arizona"
        },


        {
            question: "What state's name means tribal town in the Creek Ingian language?",
            choices: ["Alabama", "Alaska", "Arkansas", "Georgia"],
            correctAnswer: "Alabama"
        },

        {
            question: "What state takes its name from a Spanish word meaning snow-clad?",
            choices: ["Texas", "Colorado", "Nevada", "New Mexico"],
            correctAnswer: "Nevada"
        },

        {
            question: "What state shares its border with only one other state?",
            choices: ["Maine", "Michigan", "Delaware", "Florida"],
            correctAnswer: "Maine"
        },

        {
            question: "What state ranks first in state boat registrations?",
            choices: ["Florida", "North Carolina", "Michigan", "Maryland"],
            correctAnswer: "Michigan"
        }];

var timer;


var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,


countdown: function() {
        
         game.counter--;
        $("#counter-number").html(game.counter);
        if(game.counter === 0) {
            console.log("Time Up!");
            game.done();
        }

    }, 

start: function() {

     timer = setInterval(game.countdown, 3000);
           
           $("#app").prepend("<h2>Time Remaining: <span id='counter-number'> 30 </span> Seconds</h2>");

           $("#start").remove();

            for (var i = 0; i < allQuestions.length; i++) {
                quiz.append("<h2>" + allQuestions[i].question + "</h2>");
                for (var j = 0; j < allQuestions[i].choices.length; j++) {
                    quiz.append("<input type='radio' name='question-" +i+"'value='" + allQuestions[i].choices[j] + "''>" + allQuestions[i].choices[j]);
                   } 
                }
            quiz.append("<div><button id='done'>Done</button><div>");
        },

        done: function() {

            

            $.each($("input[name='question-0']:checked"), function() {
                if ($(this).val() === allQuestions[0].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-1']:checked"), function() {
                if ($(this).val() === allQuestions[1].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-2']:checked"), function() {
                if ($(this).val() === allQuestions[2].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-3']:checked"), function() {
                if ($(this).val() === allQuestions[3].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-4']:checked"), function() {
                if ($(this).val() === allQuestions[4].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-5']:checked"), function() {
                if ($(this).val() === allQuestions[5].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-6']:checked"), function() {
                if ($(this).val() === allQuestions[6].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            $.each($("input[name='question-7']:checked"), function() {
                if ($(this).val() === allQuestions[7].correctAnswer) {
                    game.correct++;
                }
                else{
                    game.incorrect++;
                }
            });

            this.result();
        },

 result: function() {
        clearInterval(timer);

        $("#app").empty();

         quiz.html("<h2> All Done!</h2>");
         quiz.append("<h3>Correct Answers:" + this.correct + "</h3>");
         quiz.append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
         quiz.append("<h3>Unanswered:" + (allQuestions.length - (this.incorrect + this.correct)) + "</h3>");
    }
    };

     $(document).on("click", "#start", function() {
                    game.start();
                });

                $(document).on("click", "#done", function() {
                    game.done();
                });








//                 game.checkAnswers();
//                 );
                
//             });



//             displayQuestions();

// function displayQuestions() {

//     for (var i = 0; i < allQuestions.objQuestion.length; i++) {

//         // print question
//         var question = $("<h2>")
//         question.text(allQuestions.objQuestion[i].quesion);
//         quiz.append(question);

//         // print answers
//         var choices = allQuestions.objQuestion[i].choices;
//         for (var j = 0; j < choices.length; j++) {

//             var label = $(`<label>${choices[j]}</label>`);
//             quiz.append(label);
//             var button = $(`<input type="radio" name="answer-${i}" value="${choices[j]}" />`);
//             quiz.append(button);
//         }


//     }

// }







// function checkAnswers() {
//     //console.log("testing"); 
//     // $.each($('input[type=radio]:checked'), 
//     function(index, element) {
//         var answerArray = allQuestions.objQuestion[index].choices;
//         var correctAnswerIndex = allQuestions.objQuestion[index].correctAnswer;
//         if ($(element).val() == answerArray[correctAnswerIndex]) {
//             game.correct++;
//         } else {
//             game.incorrect++;
//         }
//     };

//     // game.result();

//     // this.result();
//     function result() {
//         clearInterval(timer);

//         quiz.remove();

//          quiz.html("<h2> All Done!</h2>");
//          quiz.append("<h3>Correct Answers:" + game.correct + "</h3>");
//          quiz.append("<h3>Incorrect Answers:" + game.incorrect + "</h3>");
//          quiz.append("<h3>Unanswered:" + (allQuestions.length - (game.incorrect + game.correct)) + "</h3>");
//     };




// $(document).ready(function() {

//             // View (html/css, updating with jQuery)

//             // $("#app").append(".pushButton");

//             // var start = $('<p style="text-align:center" id="#start"><button>Start</button></p>');
//             // start.click();
//             // $("#app").append(start);

//             timer = setInterval(game.timer, 3000);
//             $("#start").remove();

//            quiz.html('<p><strong>Time Remaining: </strong><span id="count"><strong> 30 </strong></span><strong> seconds</strong></p>');

//             displayQuestions();

//             var button = $('<p style="text-align:center" id="done"><button>Done!</button></p>');
//             button.click(checkAnswers);
//             quiz.append(button);

//             $(document).on("click", "#start", function() {
//                     game.start();
//                 },

//                 $(document).on("click", "#done", function() {
//                     game.done();
//                 }),

//                 game.checkAnswers();
//                 );
                
//             });


//         //  // var firstQuestion = $("<h2>")
//         //     // firstQuestion.text(allQuestions.objQuestion[0].question)
//         //     // $("#app").append(firstQuestion);



//         // $(".js-click").click(function() {
//         //     gameSetup.pushButton();
//         // });

//         // // create buttons
//         // var components = {
//         //     start - button: "<div class = 'pushButton'>" +
//         //         "<button id = 'start-button js-click'>Start</button> " +
//         //         "</div>",
//         //     radio - button: "<div class = 'jqxRadioButton'>" +
//         //         "<input type = 'button' id = 'radioButton js-click' />" +
//         //         "</div>",
//         //     done - button: "<div class = 'doneButton'>" +
//         //         "<button id = 'done-button js-click'>Done!</button> " +
//         //         "</div>",
//         // }





//         //  function buildQuiz(){
//         //   //  a place to store the HTML output
//         //  var output = [];

//         //   // for each question...
//         //   allQuestions.forEach(
//         //     (question) => {

//         //       // store the list of answer choices
//         //       var newChoices = choices[];

//         //       // and for each available answer...
//         //       for(question.newChoices){

//         //         //  HTML radio button
//         //         newChoices.push(
//         //           `<label>
//         //             <input type="radio" name="answer" value="$("newChoices")">
//         //             ${question.choices[]}
//         //           </label>`
//         //         );
//         //       }

//         //       // add this question and its answers to the output
//         //       output.push(
//         //         `<div class="question"> ${question} </div>
//         //         <div class="choices"> ${choices.join('')} </div>`
//         //       );
//         //     }
//         //   );

//         //   // finally combine output list into one string of HTML and put it on the page
        //   $("#app").innerHTML = output.join('');
        // }

        // get allQuestions(index) {
        //  for (var i = 0; i < allQuestions.length; i++) {
        //    return this.question[index];
        //  }

        // };

        //} // <!--document ready-->