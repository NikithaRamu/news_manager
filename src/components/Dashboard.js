import React, { Component } from 'react';
import Card from './Card'
import '../App.css'
import { throws } from 'assert';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsList: []
        }

        this.readNewsLater = this.readNewsLater.bind(this)
    }


    componentDidMount() {
        console.log("i am mount")
        const url = "https://my-json-server.typicode.com/NikithaRamu/first_api/articles"

        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                this.setState({
                    newsList:data
                })
                console.log("this",this.state.newsList)
            }
            )
            
    }

    readNewsLater(data){



        console.log("read news later",data.author)
        const url ='http://localhost:3001/news'
        fetch(url,{
            method:"POST",
            headers:{
                'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    }


    render() {
        return (
            <div>
                {this.state.newsList.map((item,id)=><div className="test" key={id}><Card  readNewsLater={this.readNewsLater}newsItem={item} /></div>)}
               
            </div>
        );
    }
}

export default Dashboard;