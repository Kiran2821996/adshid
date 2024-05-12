
const CourseModal = require('../Modal/Programs');





class Course {
  async AddCourse(req, res) {
    try {
        const { title, price, offerPrice, videoLink } = req.body;
        const course = new CourseModal({ title, price, offerPrice, videoLink });
        let savedCourse = await course.save();
        if (savedCourse) {
            return res.status(200).json({ message: 'Course added successfully', course: savedCourse });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async GetData(req, res) {
    try {
        const courses = await CourseModal.find({});
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async courseTrash(req, res) {
    try {
        const  id  = req.params.id;
        await CourseModal.findOneAndDelete({_id:id});
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
  async CourseUpdate(req, res) {
    try {
      const id = req.params.id;
      const { title, price, offerPrice, videoLink } = req.body;
      
     
      const findCourse = await CourseModal.findOne({ _id: id });
      
      if (!findCourse) {
        return res.status(404).json({ error: "Course not found" });
      }
  
 
      const updatedCourse = await CourseModal.findOneAndUpdate(
        { _id: id }, 
        {
          $set: {
            title: title || findCourse.title,
            offerPrice: offerPrice || findCourse.offerPrice,
            price: price || findCourse.price,
            videoLink: videoLink || findCourse.videoLink,
          }
        },
        { new: true }
      );
  
      res.status(200).json({
        message: "Course updated successfully",
        course: updatedCourse,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }

  }
}

const CourseController = new Course();
module.exports = CourseController;
