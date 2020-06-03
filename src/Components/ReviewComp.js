import React, {Component} from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import ReviewTemplate from './ReviewTemplate';
import '../css/App.css';
import '../css/Review.css';

class ReviewComp extends Component{
    id = 2
    state={
        input:'',
        reviews:[
            {id:0, text:'리뷰리스트'},
            {id:1, text:'왜 안돼'}
        ]
    }

    handleChange = (e) =>{
        this.setState({
          input : e.target.value,
        });
    }

    handleCreate = () => {
        const {input, reviews} = this.state;
        this.setState({
          reviews: reviews.concat({
            id: this.id++,
            text: input
          })
        })
    }

    handleRemove = (id) => {
        const { reviews } = this.state;
        this.setState({
          reviews: reviews.filter(review => review.id !== id)
        });
      }

   /*handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            textarea:''
        })
    }*/
    render(){
        
        const {input,reviews} = this.state
       // var contents = textarea.replace("\r\n","<br>");
        const{
            handleChange,
            handleCreate,
            handleRemove
        }=this;

        return (
        <div className="revsiz">      
            <div className='textStyle'>송이들의 한마디</div>
            <ReviewTemplate
            reviewform={
                <ReviewForm
                    value={input}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />}
            children={
                <ReviewList
                    reviews={reviews} 
                    onRemove={handleRemove}
                />}
            >    
            </ReviewTemplate>
        </div>
        );
    }
}

export default ReviewComp;