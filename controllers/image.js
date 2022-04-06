/* const handleApi = (req,res) => {

}
 */

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entry', 1)
        .returning('entry')
        .then(entry => {
            res.json(entry[0].entry);
        })
        .catch(err => res.status(400).json('unable to get entries'))
    /* let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entry++;
            return res.json(user.entry);
        }
    })
    if (!found) {
        res.status(404).json("not found");
    } */
}

export default handleImage;
