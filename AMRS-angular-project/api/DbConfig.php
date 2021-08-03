<?php
class Database{
  
// specify your own database credentials
    private $host = "localhost";
    private $username = "root";
    private $password = "";
    private $db_name = "ap";


    protected $conn;

  
    // get the database connection
    
    public function __construct(){
        if (!isset($this->conn)){
            $this-> conn = new mysqli ($this->_host, $this->username,$this->password, $this->db_name);

            if (!$this-> conn){
                echo "cannot connect to the database server";
                exit;
            }
        }
        return $this->conn;
    }
}
?>