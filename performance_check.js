const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;

app.use(cors());
const server = app. listen(3000,()=> {
    console.log('Start Server : localhost:3000');
});

app.get('/api/performance_check/:type', async(req,res) => {
    let{
        type
    } = req.params;
    if(type == '1111'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '3127'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '1147'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '4531'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '3665'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '5566'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '8966'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '7412'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '1256'){
        let data = [
            {name:"교환(교체)", state:"1개"},
            {name:"판금/용접", state:"2개"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"있음"},
            {name:"단순 수리", state:"있음"},
            {name:"성능/상태점검자", state:"고길동"}
        ];
        res.send(data);
    }
    else if(type == '2222'){
        let data = [
            {name:"교환(교체)", state:"1개"},
            {name:"판금/용접", state:"2개"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"있음"},
            {name:"단순 수리", state:"있음"},
            {name:"성능/상태점검자", state:"고길동"}
        ];
        res.send(data);
    }
    else if(type == '1818'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '8563'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '7853'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '0257'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '0112'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '7280'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '3040'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '8901'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else if(type == '5525'){
        let data = [
            {name:"교환(교체)", state:"없음"},
            {name:"판금/용접", state:"없음"},
            {name:"부식", state:"없음"},
            {name:"요철", state:"없음"},
            {name:"손상", state:"없음"},
            {name:"사고 이력", state:"없음"},
            {name:"단순 수리", state:"없음"},
            {name:"성능/상태점검자", state:"홍길동"}
        ];
        res.send(data);
    }
    else {
        res.send('Type is not correct.');
    }
}
);