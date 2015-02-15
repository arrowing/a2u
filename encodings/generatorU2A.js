var cheerio = require('cheerio'),
		fs = require('fs'),
		filename = 'Unicode_to_GB2312_or_GBK_table.html';

fs.readFile(filename, {flag: 'r'}, function (err, data) {
  if (err) throw err;

  var $ = cheerio.load(data);

	var trs = $('table').find('tr');
	var tds, unicode, gb2312, map = [];

	trs.each( function(index, element){
		tds = $(element).find('td');

		tds.each( function(index2, td){
			var $td = $(td),
				bytes;
			
			if(index2 == 0){
					unicode = $td.text().substr(2); // U+554A、554A
			}else{
					gb2312 = $td.find('small');

					if(gb2312.length > 0){
						gb2312 = gb2312.text().substr(0, 4); // 0XB0A1、B0A1、啊
						gb2312 = parseInt(gb2312, 16); //45217（10进制）

						bytes = (+('0x'+unicode) + index2 - 2).toString(16);
						map[gb2312] = bytes;
						
					};
			};

		} );

	} );

	var writableStream = fs.createWriteStream('ansi2unicode_arr.js');
	writableStream.write(JSON.stringify(map));
	writableStream.end();

});


