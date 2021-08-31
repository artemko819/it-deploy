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
        {option:'Танцював',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Прибирав в твоїй кімнаті',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Виконував твоє шкільне домашнє завдання',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'У дитинстві ви захоплено грали з конструктором?',
      answer:[
        {option:'Так',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Ні',proffesion:[{design:false},{web:false},{game:true}]},      
        {option:'У мене не було конструктора',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Яке хобі у вас зараз?',
      answer:[
        {option:'Малювати',proffesion:[{design:false},{web:false},{game:true}]},     
        {option:'Дивитися корисні відео',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Грати в комп`ютерні ігри',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Що вам більше подобається?',
      answer:[
        {option:'Фотографувати',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Запрограмувати комп`ютер',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Що-небудь розбирати',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Які ваші найкращі якості?',
      answer:[
        {option:'Хороша фантазія',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Навички командної роботи',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Уміння вирішувати завдання',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Головна мета від роботи вашої мрії?',
      answer:[
        {option:'Веселитися',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Змінити світ',proffesion:[{design:false},{web:false},{game:true}]},        
        {option:'Допомагати іншим',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'В якому додатку ви б хотіли витрачати найбільше часу?',
      answer:[
        {option:'Instagram / TikTok',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'YouTube / Wikipedia',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Among US / Brawl Stars',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },    {
      question:'Що вам більше подобається?',
      answer:[
        {option:'Складати пісню',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Розробляти робота',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Створювати свою гру',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'В яке місце ви б хотіли відправитися найбільше зараз?',
      answer:[
        {option:'В галерею мистецтва',proffesion:[{design:false},{web:false},{game:true}]},   
        {option:'Додому, в свою кімнату',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'У парк розваг',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Змогли-б сидіти за комп`ютером або в телефоні цілими днями? ',
      answer:[
        {option:' Так',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Ні',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'У мене немає комп`ютера або телефону',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    }
  ]
  quizzesEvo:Quiz[] = [
    {
      question:'Якби ви грали в футбол (волейбол, баскетбол), то хотіли б бути?',
      answer:[        
        {option:'Відомим гравцем',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Обраним капітаном команди',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Тренером, який розробляє тактику гри',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Що вам більше подобається?',
      answer:[
        {option:'Створювати реалістичний світ в 3D графіці',proffesion:[{design:false},{web:false},{game:true}]},    
        {option:'Розробляти технологію, яка змінить світ',proffesion:[{design:false},{web:false},{game:true}]},       
        {option:'Створювати свою гру',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Як би виглядав робот вашої мрії?',
      answer:[
        {option:'Танцював',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Виконував твоє шкільне домашнє завдання',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Прибирав в твоїй кімнаті',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Ідеальна робота для вас дає можливість?',
      answer:[
        {option:'Знаходити нові методи і підходи',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Отримати стабільність',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Багато спілкуватися з іншими людьми',proffesion:[{design:false},{web:false},{game:true}]},
       
      ]
    },
    {
      question:'Ви б з великим інтересом?',
      answer:[
        {option:'Придумали цікавий конкурс',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Взяли участь у конкурсі',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Організували конкурс і керували ним',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Наскільки вам цікаво програмувати вебсайт або мобільний додаток?',
      answer:[
        {option:'Трохи цікаво',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Дуже цікаво',proffesion:[{design:false},{web:false},{game:true}]},  
        {option:'Не цікаво',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Ви хочете, щоб у вашій щоденній роботі були відсутні?',
      answer:[
        {option:'Неясні завдання',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Нудьга, монотонність',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Правила, стандарти',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },    
    {
      question:'Які ваші найкращі якості?',
      answer:[
        {option:'Хороша фантазія',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Сильна концентрація',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Завзятість',proffesion:[{design:false},{web:false},{game:true}]},
        
      ]
    },
    {
      question:'Наскільки вам цікаво проявляти креатив і придумувати щось нове?',
      answer:[
        {option:'Дуже цікаво',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Злегка цікаво',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Не цікавить',proffesion:[{design:false},{web:false},{game:true}]},
      ]
    },
    {
      question:'Яке хобі у вас зараз? ',
      answer:[
        {option:'Малювати',proffesion:[{design:false},{web:false},{game:true}]},
        {option:'Дивитися корисні відео',proffesion:[{design:false},{web:false},{game:true}]},
        {option:' Грати в комп`ютерні ігри',proffesion:[{design:false},{web:false},{game:true}]},
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
