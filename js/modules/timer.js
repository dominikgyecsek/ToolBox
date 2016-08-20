var Timer = function() {
	this.scrollTopMinute = 0;
	this.scrollTopHour = 0;
	this.hasTimer = false;
}

Timer.prototype.initialise = function(id) {

	var DOM = "\
		<div data-module='12' data-id=" + id + " class='frame timer open-module'>\
			" + m.controllers + "\
			<div class='content scrollbar-hide'>\
				<div class='timer-layer'></div>\
				<button class='stop-timer timer-btn'>Stop</button>\
				<div class='timer-remainder'></div>\
				<div class='timer-picker'>\
					<div id='timer-hour' class='timer-section scrollbar-hide'>\
						<div  class='timer-hour scrollbar-hide'>\
							<div>0</div>\
							<div>1</div>\
							<div>2</div>\
							<div>3</div>\
							<div>4</div>\
							<div>5</div>\
							<div>6</div>\
							<div>7</div>\
							<div>8</div>\
							<div>9</div>\
							<div>10</div>\
							<div>11</div>\
							<div>12</div>\
							<div>13</div>\
							<div>14</div>\
							<div>15</div>\
							<div>16</div>\
							<div>17</div>\
							<div>18</div>\
							<div>19</div>\
							<div>20</div>\
							<div>21</div>\
							<div>22</div>\
							<div>23</div>\
							<div>24</div>\
						</div>\
						<div class='timer-label'>h</div>\
					</div>\
					<div id='timer-minute' class='timer-section scrollbar-hide'>\
						<div class='timer-minute scrollbar-hide'>\
							<div>0</div>\
							<div>1</div>\
							<div>2</div>\
							<div>3</div>\
							<div>4</div>\
							<div>5</div>\
							<div>6</div>\
							<div>7</div>\
							<div>8</div>\
							<div>9</div>\
							<div>10</div>\
							<div>11</div>\
							<div>12</div>\
							<div>13</div>\
							<div>14</div>\
							<div>15</div>\
							<div>16</div>\
							<div>17</div>\
							<div>18</div>\
							<div>19</div>\
							<div>20</div>\
							<div>21</div>\
							<div>22</div>\
							<div>23</div>\
							<div>24</div>\
							<div>25</div>\
							<div>26</div>\
							<div>27</div>\
							<div>28</div>\
							<div>29</div>\
							<div>30</div>\
							<div>31</div>\
							<div>32</div>\
							<div>33</div>\
							<div>34</div>\
							<div>35</div>\
							<div>36</div>\
							<div>37</div>\
							<div>38</div>\
							<div>39</div>\
							<div>40</div>\
							<div>41</div>\
							<div>42</div>\
							<div>43</div>\
							<div>44</div>\
							<div>45</div>\
							<div>46</div>\
							<div>47</div>\
							<div>48</div>\
							<div>49</div>\
							<div>50</div>\
							<div>51</div>\
							<div>52</div>\
							<div>53</div>\
							<div>54</div>\
							<div>55</div>\
							<div>56</div>\
							<div>57</div>\
							<div>58</div>\
							<div>59</div>\
						</div>\
						<div class='timer-label' id='timer-label-minute'>m</div>\
					</div>\
				</div>\
				<button class='start-pause-timer timer-btn'>Start</button>\
			</div>\
		</div>\
	";

	$("main").append(DOM);
	$(".timer").last().draggable().resizable();

}

var timer = new Timer();

console.log(timer.hasTimer);