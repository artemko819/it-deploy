import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, Test, TestSchool } from '../admin/shared/interfaces';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes:Quiz[] = [
    {
      question:'Як би виглядав робот вашої мрії?',
      answer:[
        {option:'Виконував твоє шкільне домашнє завдання',correct:false},
        {option:'Танцював',correct:true},
        {option:'Прибирав в твоїй кімнаті',correct:false}
      ]
    },
    {
      question:'У дитинстві ви захоплено грали з конструктором?',
      answer:[
        {option:'Так',correct:true},
        {option:'Ні',correct:false},        
        {option:'У мене не було конструктора',correct:false}
      ]
    },
    {
      question:'Яке хобі у вас зараз?',
      answer:[
        {option:'Грати в комп`ютерні ігри',correct:false},
        {option:'Малювати',correct:false},
        {option:'Дивитися корисні відео',correct:true},
      ]
    },
    {
      question:'Що вам більше подобається?',
      answer:[
        {option:'Що-небудь розбирати',correct:false},
        {option:'Фотографувати',correct:false},
        {option:'Запрограмувати комп`ютер',correct:true},
      ]
    },
    {
      question:'Які ваші найкращі якості?',
      answer:[
        {option:'Хороша фантазія',correct:false},
        {option:'Навички командної роботи',correct:false},
        {option:'Уміння вирішувати завдання',correct:true},
      ]
    },
    {
      question:'Головна мета від роботи вашої мрії?',
      answer:[
        {option:'Змінити світ',correct:false},
        {option:'Веселитися',correct:false},
        {option:'Допомагати іншим',correct:true},
      ]
    },
    {
      question:'В якому додатку ви б хотіли витрачати найбільше часу?',
      answer:[
        {option:'Instagram / TikTok',correct:false},
        {option:'Among US / Brawl Stars',correct:false},
        {option:'YouTube / Wikipedia',correct:true},
      ]
    },    {
      question:'Що вам більше подобається?',
      answer:[
        {option:'Створювати свою гру',correct:false},
        {option:'Складати пісню',correct:false},
        {option:'Розробляти робота',correct:true},
      ]
    },
    {
      question:'В яке місце ви б хотіли відправитися найбільше зараз?',
      answer:[
        {option:'У парк розваг',correct:false},
        {option:'В галерею мистецтва',correct:false},
        {option:'Додому, в свою кімнату',correct:true},
      ]
    },
    {
      question:'Змогли-б сидіти за комп`ютером або в телефоні цілими днями? ',
      answer:[
        {option:' Так',correct:false},
        {option:'Ні',correct:false},
        {option:'У мене немає комп`ютера або телефону',correct:true},
      ]
    }
  ]
  quizzesEvo:Quiz[] = [
    {
      question:'Якби ви грали в футбол (волейбол, баскетбол), то хотіли б бути?',
      answer:[
        {option:'Тренером, який розробляє тактику гри',correct:false},
        {option:'Відомим гравцем',correct:true},
        {option:'Обраним капітаном команди',correct:false}
      ]
    },
    {
      question:'Що вам більше подобається?',
      answer:[
        {option:'Розробляти технологію, яка змінить світ',correct:true},
        {option:'Створювати реалістичний світ в 3D графіці',correct:false},        
        {option:'Створювати свою гру',correct:false}
      ]
    },
    {
      question:'Як би виглядав робот вашої мрії?',
      answer:[
        {option:'Виконував твоє шкільне домашнє завдання',correct:false},
        {option:'Танцював',correct:false},
        {option:'Прибирав в твоїй кімнаті',correct:true},
      ]
    },
    {
      question:'Ідеальна робота для вас дає можливість?',
      answer:[
        {option:'Багато спілкуватися з іншими людьми',correct:false},
        {option:'Отримати стабільність',correct:false},
        {option:'Знаходити нові методи і підходи',correct:true},
      ]
    },
    {
      question:'Ви б з великим інтересом?',
      answer:[
        {option:'Придумали цікавий конкурс',correct:false},
        {option:'Взяли участь у конкурсі',correct:false},
        {option:'Організували конкурс і керували ним',correct:true},
      ]
    },
    {
      question:'Наскільки вам цікаво програмувати вебсайт або мобільний додаток?',
      answer:[
        {option:'Дуже цікаво',correct:false},
        {option:'Трохи цікаво',correct:false},
        {option:'Не цікаво',correct:true},
      ]
    },
    {
      question:'Ви хочете, щоб у вашій щоденній роботі були відсутні?',
      answer:[
        {option:'Неясні завдання',correct:false},
        {option:'Нудьга, монотонність',correct:false},
        {option:'Правила, стандарти',correct:true},
      ]
    },    {
      question:'Які ваші найкращі якості?',
      answer:[
        {option:'Сильна концентрація',correct:false},
        {option:'Завзятість',correct:false},
        {option:'Хороша фантазія',correct:true},
      ]
    },
    {
      question:'Наскільки вам цікаво проявляти креатив і придумувати щось нове?',
      answer:[
        {option:'Дуже цікаво',correct:false},
        {option:'Злегка цікаво',correct:false},
        {option:'Не цікавить',correct:true},
      ]
    },
    {
      question:'Яке хобі у вас зараз? ',
      answer:[
        {option:' Грати в комп`ютерні ігри',correct:false},
        {option:'Малювати',correct:false},
        {option:'Дивитися корисні відео',correct:true},
      ]
    }
  ]
  constructor(private http:HttpClient) { }
  
fetch():Observable<Test[]>{
    return this.http.get<Test[]>('/api/test/get-test')
}
create(test:Test):Observable<Test>{

    return this.http.post<Test>('/api/test/add-test',test)
}
delete(consult:Test):Observable<Message>{
    return this.http.delete<Message>(`/api/test/${consult._id}`)
}
fetchSchool():Observable<TestSchool[]>{
  return this.http.get<TestSchool[]>('/api/test-school/get-test')
}
createSchool(test:TestSchool):Observable<TestSchool>{
  return this.http.post<TestSchool>('/api/test-school/add-test',test)
}
deleteSchool(consult:TestSchool):Observable<Message>{
  return this.http.delete<Message>(`/api/test-school/${consult._id}`)
}
  getQuizzes(){
    return this.quizzes
  }
  getQuizzesEvo(){
    return this.quizzesEvo
  }
}
