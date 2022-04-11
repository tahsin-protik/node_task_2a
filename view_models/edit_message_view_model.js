
module.exports = function (response) {
  
    this.endpoint = "{{{route}}}"
    //required to render every page
    this.message= response.message;
    this.counter = response.counter;
    this.get_page_name = () => "Message"
  
    return this
  }