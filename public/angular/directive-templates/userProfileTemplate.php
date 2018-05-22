<section id="u_details">
  <div class="grid-container">
    <div class="grid-50">
      <div class="content">
        <h2 class="header" style="margin-bottom: 2px;">{{ $parent.userdetails.firstname }} {{ $parent.userdetails.lastname }}</h2>
        <div class="content" style="padding-bottom: 5px;">
          <div class="meta">
            <span class="date">Joined {{ $parent.userdetails.created_at | timeAgo }}</span>
          </div>
          <div class="description">
            {{ $parent.userdetails.address }}
          </div>
        </div>
        <div class="content" style="padding-bottom: 5px;">
          <div class="ui blue label">
            <i class="marker icon"></i> {{ $parent.userdetails.town }}, {{ $parent.userdetails.state }}.
          </div>
          <div class="ui blue label">
            <i class="mail icon"></i> {{ $parent.userdetails.email }}
          </div>
        </div>
        <div class="content" style="padding-bottom: 5px;">
          <div class="ui green label">
            <i class="call square icon"></i> {{ $parent.userdetails.phone1 }}
          </div>
          <div class="ui green label">
            <i class="call square icon"></i> {{ $parent.userdetails.phone2 }}
          </div>
        </div>
        <div class="content" style="padding-bottom: 5px;">
          <div class="ui blue image label">
            Last seen
            <div class="detail">2 weeks ago</div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-50">
      <div class="content" style="padding-bottom: 5px;">
        <div class="ui orange image label">
          My Bank
          <div class="detail">{{ $parent.userdetails.bank }}</div>
        </div>
      </div>
      <div class="content" style="padding-bottom: 25px;">
        <div class="ui teal image label">
          Acct. No.
          <div class="detail">{{ $parent.userdetails.acct_no }}</div>
        </div>
      </div>
      <div class="content" style="padding-bottom: 5px;">
        <div class="ui red image label">
          Referral code
          <div class="detail">{{ $parent.userdetails.refcode }}</div>
        </div>
      </div>
    </div>
  </div>
</section>
