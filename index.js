function GetCurrentDateDDMMYYYY(){
	const today = new Date();
	const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
	let dd = today.getDate();
	if (dd < 10) dd = '0' + dd; if (mm < 10) mm = '0' + mm; const formattedToday = dd + '-' + mm + '-' + yyyy;
	return formattedToday;
}
function GetCurrentDateTimeDDMMYYYY(){
	const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
	let dd = today.getDate();
	if (dd < 10) dd = '0' + dd; if (mm < 10) mm = '0' + mm; const formattedToday = dd + '-' + mm + '-' + yyyy;
	return formattedToday;
}
function GetCurrentDateYYYYMMDD(){
	const formattedToday = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().substr(0, 10).replace('T', ' ')
	return formattedToday;
}
function GetCurrentDateTimeYYYYMMDD(){
	const formattedToday = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().substr(0, 19).replace('T', ' ')
	return formattedToday;
}
function GetFormattedDate(date){
	return date;
}
function GetFormattedDateTime(dateTime){
	return dateTime;
}
function GetCurrentDateInFormat(dateTime){
	return dateTime;
}

module.exports = {GetCurrentDate,GetFormattedDate, GetFormattedDateTime, GetCurrentDateInFormat}