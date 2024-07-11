const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const answerSchema=new Schema({
    Answer: {
        type: String,
        required: true,
    },
    QuestionId: {
        type:String,
    },
},{ timestamps:true });

const Answer=mongoose.model('Answer',answerSchema);
module.exports=Answer;