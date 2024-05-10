
const ContactModal = require('../Modal/Contactus');





class Contact {
  async AddContact(req, res) {
    try {
        const {name,phone,email,message} = req.body;
        const Contact = new ContactModal({ name,phone,email,message });
        let savedContact = await Contact.save();
        if (savedContact) {
            return res.status(200).json({ message: 'Contact added successfully', Contact: savedContact});
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async GetData(req, res) {
    try {
        const Contact = await ContactModal.find({});
        res.status(200).json(Contact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  async courseTrash(req, res) {
    try {
        const { id } = req.params;
        await ContactModal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
  async CourseUpdate(req, res) {
    try {
        const { id } = req.params;
        const { name,phone,email,message } = req.body;
        const updatedContact = 
        await ContactModal.findByIdAndUpdate(id, { name,phone,email,message}, { new: true });
        res.status(200).json({ message: 'Contact updated successfully',
         Contact: updatedContact });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
}
const ContactController = new Contact();
module.exports = ContactController;
