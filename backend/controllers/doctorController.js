import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;

        if (!docId) {
            return res.status(400).json({
                success: false,
                message: 'Doctor ID is required'
            });
        }

        const docData = await doctorModel.findById(docId);

        if (!docData) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        
        return res.status(200).json({
            success: true,
            message: 'Doctor availability updated successfully'
        });
    } catch (error) {
        console.error("Error changing availability:", error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating availability'
        });
    }
};

const doctorList = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select(['-password','-email']);
        res.status(200).json({
            success : true,
            doctors
        })
    } catch (error) {
        console.error("Error in displaying doctors:", error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while displaying doctors'
        });
    }
}

export { changeAvailability,doctorList };
