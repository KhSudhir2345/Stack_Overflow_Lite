const Question=require('../models/question');
const Answer = require('../models/answer');



const question_index=(req,res) => {
    Question.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index',{questions:result,title:'All Questions'});
        })
        .catch(err => {
            console.log(err);
        });
    
}
const question_details=async (req,res) =>{
    try{
        const qid=req.params.qid;
        const aid=req.params.aid;
        console.log('I reached here');
        const question=await Question.findById(qid).exec();
        if(!question){
            res.render('404',{ title:Error });
        }
        let answers=null;
            answers=await Answer.find({ QuestionId: qid }).exec();
            console.log("Hi,The answer is",answers);
            if(!answers){
                res.render('404',{ title:Error });
        }
        res.render('details',{title:'Answers',
            question,
            answers
        });
    } catch(error) {
        console.error('Error fetching data:', error);
        res.render('404',{ title:Error });
    }    
};

const question_create_get=(req,res) => {
   
    res.render('create',{title:'Add a Question'});
}

const question_create_post=(req,res) => {

    const question=new Question(req.body);
    question.save()
        .then(result => {
            res.redirect('/questions');
        })
        .catch(err => {
            console.log(err);
        })
}
const add_answer_get=(req,res) => {
    console.log(req.params.id);
    res.render('answer',{title:'Add Answer',id:req.params.id});
}
const answer_post=(req,res) => {
    const qid=req.params.qid;
    const answer=new Answer(req.body);
    console.log("req",req.body);
    console.log('I am posting it....');
    answer.save()
        .then(result => {
            console.log('I went till redirect');
            console.log('result',result);
            res.redirect(`/questions/${qid}/answers/${result.id}`);
        })
        .catch(err => {
            console.log(err);
        })
}
const answer_post_profile=async (req,res) => {
    let answers=null;
    console.log('I came inside answer first');
    answers=await Answer.find().exec();
    console.log("answer",answers);
    if(answers){
        console.log('I went inside profile');
        console.log(answers);
        console.log('I am here');
        res.render('myAnswers',{title:'My Answers',answers:answers});
    }
    else{
        console.log("Couldn't find anything ,Sorry");
    }

};
const question_post_profile=async (req,res) => {
    let questions=null;
    console.log('I came inside question first');
    questions=await Question.find().exec();
    console.log("question",questions);
    if(questions){
        console.log('I went inside profile');
        console.log(questions);
        res.render('profile',{title:'My Questions',questions});
    }
    else{
        console.log("Couldn't find anything ,Sorry");
    }

};
const profile_redirect=(req,res) => {
    res.redirect('/profile/Questions');
}

module.exports= {
    question_index,
    question_details,
    question_create_get,
    question_create_post,
    answer_post,
    add_answer_get,
    answer_post_profile,
    question_post_profile,
    profile_redirect
};