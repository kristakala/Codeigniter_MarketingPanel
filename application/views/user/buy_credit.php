
	<style type="text/css">
		.container{padding:20px;}
		.payment_form_box{/*box-shadow:0px 0px 5px rgba(0,0,0,.8),0px 0px 50px rgba(0,0,0,.2) inset;*/background:#fff;padding:35px 25px 0 25px;}
		.table td{vertical-align: middle;}
	</style>

    <script type="text/javascript">
        function jsFunction(){
            var myselect = document.getElementById("package");
            alert(myselect.options[myselect.selectedIndex].value);
        }
    </script>

    <?php
                    if($view['buy'] == 2)
                    {
                        if($view['msg'] != "" ) 
                            echo msg($view['msg'],$view['msg_type']); 
                    }
                    ?>
	<div class="row">
		<?php
                                            if($view['buy'] == 1)
                                            {
                                                echo '
                                                <div class="col-xs-12">
                                                <div class="col-xs-12 payment_form_box">
                                                   <div class="col-xs-12 text-center" style="font-weight:bold;color:#32c5d2 ;">
                                                   <p>&nbsp;</p>
                                                   <p>&nbsp;</p>
                                                   
                                                   <h1 style="font-size:300% !important;font-weight:bold;">Thank You!</h1>
                                                   <h4 style="font-size:150% !important;" ><span style="color:#703688;">'.$view['credit'].'</span>  Credits Added to your Account.</h4>
                                                   <h4 style="font-size:150% !important;">Your current Credit Balance is <span style="color:#703688;">'.$dash_profile['balance'].'</span>.</h4>
                                                   <p>&nbsp;</p>
                                                   <p>&nbsp;</p>
                                                   <p>&nbsp;</p>
                                                   <p>&nbsp;</p>
                                                   <p>&nbsp;</p>
                                                   </div>
                                                </div>
                                                </div>
                                                ';
                                            }

                                            else
                                            {
                                             

                                        ?>
		<div class="col-xs-12 col-md-6 col-md-offset-3 payment_form_box">
			   <form action="<?php echo base_url();?>Stripe_payment/checkout_buy_credit" method="POST" id="payment-form">

				<div style="margin-bottom:15px;"><span style="color:red;" class="payment-errors"></span></div>
			   <table class="table">
			   		<!--<tr>
			   			<td>Price per Credit</td>
			   			<td colspan="2"><?php /*echo $dash_profile['price_per_credit']; */?></td>
			   		</tr>
			   		<tr>
			   			<td>Credit</td>
			   			<td colspan="2"><input class="form-control" id="get_credit_count" type="number" name="credit_count" onkeyup="set_total_price_during_buy(<?php /*echo $dash_profile['price_per_credit']; */?>,this.value)"></td>
			   		</tr>-->
                   <tr>
                       <td>
                           Credit
                       </td>
                       <td colspan="2">
                           <select id="package" name="package" onchange="changePrice()">
                               <option value="47" selected>50,000 credits, $47</option>
                               <option value="97">100,000 credits, $97</option>
                               <option value="197">200,000 credits, $197</option>
                               <option value="297">300,000 credits, $297</option>
                               <option value="400">400,000 credits, $397</option>
                               <option value="497">500,000 credits, $497</option>
                               <option value="597">600,000 credits, $597</option>
                               <option value="697">700,000 credits, $697</option>
                               <option value="797">800,000 credits, $797</option>
                               <option value="897">900,000 credits, $897</option>
                               <option value="997">1000,000 credits, $997</option>
                           </select>
                       </td>
                   </tr>
			   		<tr>
			   			<td>Price</td>
			   			<td colspan="2">$ <span id="price_during_buy">0.00</span></td>
			   		</tr>


			   		<tr>
			   			<td><span>Card Number</span></td>
			   			<td colspan="2">
												<div class="input-group">
                                                      <span class="input-group-addon">
                                                          <span class="fa fa-credit-card"></span>
                                                       </span>
                                                      <input class="form-control" type="text" size="20"  name="card_number" data-stripe="number" value="5555555555554444">
                                                  </div>
			   			</td>
			   		</tr>
			   		<tr>
			   			<td><span>Expiration (MM/YY)</span></td>
			   			<td>
			   				<div class="input-group">
                                                      <span class="input-group-addon">
                                                          <span class="fa fa-calendar-o"></span>
                                                       </span>
                                                      <input class="form-control" type="text" placeholder="MM" data-stripe="exp_month" value="07">
                                                  </div>
			   			</td>
			   			<td><input class="form-control" type="text" placeholder="YY" data-stripe="exp_year" value="16"></td>
			   		</tr>
			   		<tr>
			   			<td><span>CVC</span></td>
			   			<td colspan="2">
			   				<div class="input-group">
                                                      <span class="input-group-addon">
                                                          <span class="fa fa-lock"></span>
                                                       </span>
                                                      <input class="form-control" type="text" data-stripe="cvc" value="123">
                                                  </div>
			   			</td>
			   		</tr>
			   		<tr>
			   			<td colspan="3"><button type="submit" class="col-xs-12 btn btn-lg green submit"><i class="fa fa-shopping-cart"></i> Pay</button></td>
			   		</tr>
			   		<tr>
			   			<td colspan="3">
			   			<img class="col-xs-12" style="padding:0;" src="<?php echo base_url();?>assets/user/images/credit-cards.png">
			   			</td>
			   		</tr>




			   </table>
			    </form>
		</div>
		<?php } ?>
	</div>
