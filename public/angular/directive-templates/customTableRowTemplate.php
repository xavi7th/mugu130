<div>
   <img ng-if="mdl" ng-src="{{mdl}}" class="img-responsive" style="max-width:25%;">
   <input type="file" class="form-control" file-change="uploadImage($event, files)" ng-model="mdl">
</div>
