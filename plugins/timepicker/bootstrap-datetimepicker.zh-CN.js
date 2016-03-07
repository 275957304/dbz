/**
 * Simplified Chinese translation for bootstrap-datetimepicker
 * Yuan Cheung <advanimal@gmail.com>
 */
;(function($){
	$.fn.datetimepicker.dates['zh-CN'] = {
			days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
			daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
			months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			today: "今日",
			suffix: [],
			meridiem: ["上午", "下午"],
			format: "yyyy-mm-dd" /*控制显示格式*/
	};
	$('.selecTime').datetimepicker({
		minView: "month", //选择日期后，不会再跳转去选择时分秒
	　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式
	　　language: 'zh-CN', //汉化
	　　autoclose:true //选择日期后自动关闭
    });
	
	$('.selecTime-hh').datetimepicker({
		language: 'zh-CN',
        format: 'yyyy-mm-dd hh:ii',
		autoclose:true
    });
}(jQuery));
