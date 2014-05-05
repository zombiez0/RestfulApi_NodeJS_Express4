
module.exports = function(app, router, Student) {
	router.use(function(req, res, next) {
		console.log("request..");
		next();
	});

	router.get('/', function(req , res) {
		res.json({ message : "Welcome to Student CRUD System" });
	});

		
	//Update the student
	router.route('/students/:student_id')
		.put(function(req, res) {
			Student.findById(req.params.student_id, function(err, student) {
				if(err) {
					console.log("Error could not find student with the id")
					res.send(err);
				}
				student.name = req.body.name;

				student.save(function(err) {
					if(err) {
						console.log("Error could not find student with the id")
						res.send(err);
					}
					res.json({ message : 'Student Updated'});
				});
			});
		})


		//Get details of a individual student
		.get(function(req, res) {
			Student.findById(req.params.student_id, function(err, student) {
				if(err) {
					console.log("Error could not find student with the id")
					res.send(err);
				}
				res.json(student)	
			});
		}) 


		//Delete the student
		.delete(function(req, res) {
			Student.remove({_id : req.params.student_id}, function(err, student) {
				if(err) {
					console.log("Error could not find student with the id")
					res.send(err);
				}
				res.json({ message : 'Successfully Deleted'});
			})
		})


			


	router.route('/students')

		//Create a student	
		.post(function(req, res) {
			var student = new Student();
			student.name = req.body.name;

			student.save(function(err) {
				if(err){
					res.send(err);
				}
				res.json({ message : 'Student created'});
			});
		})

		//Get all students
		.get(function(req, res) {
			Student.find(function(err, students) {
				if(err){
					res.send(err);
				}
				res.json(students);
			});
		});

		
}