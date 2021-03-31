import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import VideoQuestions from '../pages/VideoQuestions';
import NotFound from '../pages/NotFound';
import CreateQuestion from '../pages/CreateQuestion';
import Question from '../components/Question';
import state from '../data.json';

function Index() {
    return (
        <BrowserRouter>
            <Switch>
                {
                    state.data.map((valor) => {
                        return (
                            <Route exact path={`/questions/video-${valor.id}`} component={Question} />
                        )
                    })
                }
                <Route exact path="/questions/create-question" component={CreateQuestion} />
                <Route exact path="/questions" component={VideoQuestions} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Index;