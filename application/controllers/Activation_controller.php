<?php

/**
 * Created by PhpStorm.
 * User: titu
 * Date: 1/11/17
 * Time: 2:56 AM
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require 'vendor/autoload.php';
class Activation_controller extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $this->session->set_flashdata(array('request' => $actual_link));
        if(strpos($actual_link, "http://$_SERVER[HTTP_HOST]/activate") === false) {
            redirect('login');
        }
        $this->load->model("Mdl_user");
        $this->connection = new MongoClient("mongodb://127.0.0.1:27017");
        $this->db = $this->connection->email_cleanup;
        $this->sa = $this->db->sa;
        $this->user = $this->db->users;
        $this->package = $this->db->package;
    }

    public function activate_account($activation_token)
    {
        $data['activation_token'] = $activation_token;
        $data['user'] = $this->Mdl_user->get_user_by_token($activation_token);
        $this->load->view("user/activate_account", $data);
    }

}