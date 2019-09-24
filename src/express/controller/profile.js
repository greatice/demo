const Profile = require("../model/profile");

async function getOneStaffProfile(req, res) {
  const { id } = req.params;

  const profile = await Profile.findById(id);
  if (!profile) {
    return res.status(404).json("profile not found");
  }
  return res.json(profile);
}

async function getAllStaffProfile(req, res) {
  const profile = await Profile.find();
  return res.json(profile);
}

async function AddProfile(req, res) {
  const { name, id } = req.body;

  const searchProfile = await Profile.findById(id);
  if (searchProfile) {
    return res.status(400).json("Profile already existed");
  }
  const profile = new Profile({
    name,
    id
  });
  await profile.save();
  return res.json(profile);
}

async function ChangeProfile(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const newProfile = await Profile.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );
  if (!newProfile) {
    return res.status(404).json("profile not found");
  }
  return res.json(newProfile);
}

async function DeleteProfile(req, res) {
  const { id } = req.params;
  const profile = await Profile.findByIdAndDelete(id);
  if (!profile) {
    return res.status(404).json("profile not found");
  }
  return res.send("Delete succeed!");
}

module.exports = {
  getOneStaffProfile,
  getAllStaffProfile,
  AddProfile,
  ChangeProfile,
  DeleteProfile
};
