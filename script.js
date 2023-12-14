var arrQoute=['اثبت نفسك لنفسك وليس للاخرين','حارب من أجل أحلامك','انهض بنفسك تنهض بأمتك','والله للساعين خير معين','إذا تعبت تعلم أن تستريح وليس أن تستسلم',`“We read to know we're not alone.”
― William Nicholson, Shadowlands: A Play
`,`“There is nothing better than a friend, unless it is a friend with chocolate.”
― Linda Grayson`,`
“Be yourself; everyone else is already taken.”
― Oscar Wilde`
]

function getQoute(){
    var myQoute=arrQoute[Math.floor(Math.random()*arrQoute.length)];

    document.getElementById('item').innerHTML=myQoute;
}
