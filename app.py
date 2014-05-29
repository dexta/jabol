from bottle.bottle import route, request, response, template, run, static_file
import os,re

@route('/js/configLinks.js')
def addLinks():
	with open("./js/configLinks.js","r") as tmpFile:
		data=tmpFile.read()

	toLoad="var inception=["	
	for dirList in os.listdir("./links/"):
		if(len(re.findall("\.js$",dirList))==0): continue
		toLoad += "{typ:\"js\",path:\"links/%s\"},\n"%dirList
	toLoad=toLoad[:-2]
	toLoad+="];\n"

	out = "%s\n %s"%(data,toLoad)
	response.content_type = "text/javascript"
	return out

@route('/js/<filename>')
def javascript(filename):
	return static_file(filename, root="./js/",mimetype="text/javascript")

@route('/links/<filename>')
def linkmagic(filename):
	return static_file(filename, root="./links/",mimetype="text/javascript")

@route('/css/<filename>')
def stylesheet(filename):
	return static_file(filename, root="./css/",mimetype="text/css")

@route('/')
def default():
	return static_file("aRlinks.html", root='./', mimetype='text/html')


run(host='localhost', port=8080, reloader=True)