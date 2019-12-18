
module.exports = {
  async getImages(req, res) {
    const { 
      firstName,
      lastName
    } = req.body;

    let response;
    try {
      response = await axios.get(`https://www.google.com.br/search?q=${ firstName }+${ lastName }+nba+espn&sxsrf=ACYBGNSTiA8vZe-4dDKWO1S6HoRxla_n3Q:1567722883325&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiijsTs3rrkAhUcIbkGHRa6CVgQ_AUIFCgD&cshid=1567723079647133&biw=1360&bih=657`);
    } catch (error) {
      
    }
    return res.json(response);
  }
};