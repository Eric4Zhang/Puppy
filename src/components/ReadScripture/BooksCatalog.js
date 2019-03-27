import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import {Link} from "react-router-dom";


export default function BooksCatalog(){
    const oldTestament = [
        {'fullName': '創世記', 'abbr' :'創', 'chapter': '50', "id":"gen", "youtubeUrl":"https://youtu.be/GQI72THyO5I"},
        {'fullName': '出埃及記', 'abbr' :'出', 'chapter': '40', "id": "ex"},
        {'fullName': '利未記', 'abbr' :'利', 'chapter': '27', "id": "lev"},
        {'fullName': '民數記', 'abbr' :'民', 'chapter': '36', "id": "num"},
        {'fullName': '申命記', 'abbr' :'申', 'chapter': '34', "id": "de"},
        {'fullName': '約書亞記', 'abbr' :'書', 'chapter': '24', "id": "jos"},
        {'fullName': '士師記', 'abbr' :'士', 'chapter': '21', "id": "ju"},
        {'fullName': '路得記', 'abbr' :'得', 'chapter': '4', "id": "ruth"},
        {'fullName': '撒母耳記上', 'abbr' :'撒上', 'chapter': '31', "id": "1sam"},
        {'fullName': '撒母耳記下', 'abbr' :'撒下', 'chapter': '24', "id": "2sam"},
        {'fullName': '列王紀上', 'abbr' :'王上', 'chapter': '22', "id": "1ki"},
        {'fullName': '列王紀下', 'abbr' :'王下', 'chapter': '25', "id": "2ki"},
        {'fullName': '歷代志上', 'abbr' :'代上', 'chapter': '29', "id": "1ch"},
        {'fullName': '歷代志下', 'abbr' :'代下', 'chapter': '36', "id": "2ch"},
        {'fullName': '以斯拉記', 'abbr' :'拉', 'chapter': '10', "id": "ezra"},
        {'fullName': '尼希米記', 'abbr' :'尼', 'chapter': '13', "id": "neh"},
        {'fullName': '以斯帖記', 'abbr' :'斯', 'chapter': '10', "id": "esther"},
        {'fullName': '約伯記', 'abbr' :'伯', 'chapter': '42', "id": "job"},
        {'fullName': '詩篇', 'abbr' :'詩', 'chapter': '150', "id": "ps"},
        {'fullName': '箴言', 'abbr' :'箴', 'chapter': '31', "id": "pro"},
        {'fullName': '傳道書', 'abbr' :'傳', 'chapter': '12', "id": "ec"},
        {'fullName': '雅歌', 'abbr' :'歌', 'chapter': '8', "id": "song"},
        {'fullName': '以賽亞書', 'abbr' :'賽', 'chapter': '66', "id": "isa"},
        {'fullName': '耶利米書', 'abbr' :'耶', 'chapter': '52', "id": "jer"},
        {'fullName': '耶利米哀歌', 'abbr' :'哀', 'chapter': '5', "id": "lam"},
        {'fullName': '以西結書', 'abbr' :'結', 'chapter': '48', "id": "ez"},
        {'fullName': '但以理書', 'abbr' :'但', 'chapter': '12', "id": "dan"},
        {'fullName': '何西阿書', 'abbr' :'何', 'chapter': '14', "id": "hos"},
        {'fullName': '約珥書', 'abbr' :'珥', 'chapter': '3', "id": "joel"},
        {'fullName': '阿摩司書', 'abbr' :'摩', 'chapter': '9', "id": "amos"},
        {'fullName': '俄巴底亞書', 'abbr' :'俄', 'chapter': '1', "id": "obad"},
        {'fullName': '約拿書', 'abbr' :'拿', 'chapter': '4', "id": "jonah"},
        {'fullName': '彌迦書', 'abbr' :'彌', 'chapter': '7', "id": "mic"},
        {'fullName': '那鴻書', 'abbr' :'鴻', 'chapter': '3', "id": "nah"},
        {'fullName': '哈巴谷書', 'abbr' :'哈', 'chapter': '3', "id": "hab"},
        {'fullName': '西番雅書', 'abbr' :'番', 'chapter': '3', "id": "zeph"},
        {'fullName': '哈該書', 'abbr' :'該', 'chapter': '2', "id": "hag"},
        {'fullName': '撒迦利亞書', 'abbr' :'亞', 'chapter': '14', "id": "zech"},
        {'fullName': '瑪拉基書', 'abbr' :'瑪', 'chapter': '4', "id":"mal"},
    ];
    
    // const newTestament ={
    //     馬太福音: '太'},
    //     馬可福音: '可'},
    //     路加福音: '路'},
    //     約翰福音: '約'},
    //     使徒行傳: '徒'},
    //     羅馬書: '羅'},
    //     哥林多前書: '林前'},
    //     哥林多後書: '林後'},
    //     加拉太書: '加'},
    //     以弗所書: '弗'},
    //     腓立比書: '腓'},
    //     歌羅西書: '西'},
    //     帖撒羅尼迦前書: '帖前'},
    //     帖撒羅尼迦後書: '帖後'},
    //     提摩太前書: '提前'},
    //     提摩太後書: '提後'},
    //     提多書: '多'},
    //     腓利門書: '門'},
    //     希伯來書: '來'},
    //     雅各書: '雅'},
    //     彼得前書: '彼前'},
    //     彼得後書: '彼後'},
    //     約翰壹書: '約一'},
    //     約翰貳書: '約二'},
    //     約翰叁書: '約三'},
    //     猶大書: '猶'},
    //     啟示錄: '啟'},
    // };
    
    return (
        <Container className='my-flexWrap'>
            {oldTestament.map(
                x=>(<Card className='mx-2 my-2' style={{width: '8rem'}} key={x.id}>
                    <Card.Body>
                        <Link to={'/omac-app/bible/' + x.id} onClick={()=>{localStorage.setItem("book", x.id); localStorage.setItem("chaptersCount", x.chapter); localStorage.setItem("chapter", "1");}} className="text-decoration-none">
                        <Card.Title>{x.abbr}</Card.Title>
                        <Card.Subtitle className="text-muted">{x.fullName}</Card.Subtitle>
                        </Link>
                    </Card.Body>
                </Card>)
                )}
        </Container>
    );
}


