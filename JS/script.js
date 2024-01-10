  var resources=[
  // {
  //   id: 'a',
  //   title: 'Doctor A'
  // },
  // {
  //   id: 'b',
  //   title: 'Doctor B'
  // },  
  // {
  //     id: 'c',
  //     title: 'Doctor C'
  // } 

   ]; 
var  events= [
  { 
    title: 'Dr.Anil', 
    start: '2023-12-29T10:30:00',
    end: '2023-12-29T11:30:00', 
    description:'meeeting',   
    resourceId :'a'
      
    
  }, 
  { 
      title: 'Dr.Don', 
      start: '2023-12-29T12:30:00',
      end: '2023-12-29T13:30:00',
      description:'meeeting',  
      resourceId :'b'
    }, 
    { 
      title: 'Dr.shekhar', 
      start: '2023-12-29T14:30:00',
      end: '2023-12-29T16:30:00',
      description:'meeeting',  
      resourceId :'c'
    }
];


var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, { 
initialView: 'resourceTimeGridDay', 
resources:resources, 
allDaySlot:false, 
slotMinTime:'10:00:00',   
slotMaxTime:'20:00:00',
events:events, 
editable:true,
nowIndicator:true


});
debugger;
calendar.render();

$('.btn-success').click(a=>{
  var drId = $('#drId').val();
  var drName = $('#drName').val();

  var drObj ={
    id:drId,
    title: drName
  }
  calendarEl.addResource(PatientObj);

})
  $('.btn-danger').click(a=>{
    var PtnName= $('ptnName').val();
    var PtnEmail= $('ptnEmail').val();
    var PtnStartDate= $('ptnStartDate').val();
    var PtnEndDate= $('ptnEndDate').val();
    var DrApntmt= $('drId').val();

    var PatientObj={
      title:PtnName,
      id:PtnEmail,
      StartDate:PtnStartDate,
      EndDate:PtnEndDate,
      Appointment:DrApntmt
    }
    

  calendar.addEvent(drObj);
});
debugger;