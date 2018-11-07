import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateChallengeComponent } from './challenge/create/create-challenge.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { ChallengeComponent } from './challenge/challenge.component';
=======
import { AnswerChallengeComponent } from './challenge/answer-challenge/answer-challenge.component';
>>>>>>> Aayush-addServices

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
    { path: 'challenge-jonathan-test', component: ChallengeComponent},
    { path: 'challenge', children: [
        { path: 'create', component: CreateChallengeComponent }
    ] },
    { path: 'profile/:username', component: ProfileComponent }
=======
    {
        path: 'challenge', children: [
            { path: 'create', component: CreateChallengeComponent },
            { path: 'answer/:challengeId', component: AnswerChallengeComponent }
        ]
    },
    { path: 'profile/:id', component: ProfileComponent }
>>>>>>> Aayush-addServices
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
