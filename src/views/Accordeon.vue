<template>
<div class="container">
  <div class="col-md-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        Catalogue des logiciels
      </div>
      <div class="panel-body">
        <table class="table table-condensed table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Intitulé</th>
              <th>Windows</th>
              <th>Ubuntu</th>
              <th>Macos</th>
            </tr>
          </thead>

          <tbody>
            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
              <td><button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button></td>
              <td>vlc</td>
              <td>vlc</td>
              <td>vlc</td>
              <td>vlc</td>
            </tr>

            <tr>
              <td colspan="12" class="hiddenRow">
                <div class="accordian-body collapse" id="demo1">
                  <table class="table table-striped">
                    <thead>
                      <tr class="info">
                        <th>OS</th>
                        <th>Paquet</th>
                        <th>Version</th>
                        <th>Option</th>
                        <td> Ensure</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td colspan="12" class="hiddenRow">
                          <div class="accordian-body collapse" id="demo10">
                            <table class="table table-striped">
                           </table>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>WINDOWS</td>
                        <td>vlc</td>
                        <td>7.12.3 </td>
                        <td>[--param --verbs]</td>
                        <td>latest</td>
                      </tr>

                      <tr>
                        <td>UBUNTU</td>
                        <td>vlc</td>
                        <td>7.12.3 </td>
                        <td> </td>
                        <td>latest</td>
                      </tr>

                      <tr>
                        <td>MACOS</td>
                        <td>vlc</td>
                        <td>7.12.3 </td>
                        <td></td>
                        <td></td>
                      </tr>

                    </tbody>
                  </table>

                </div>
              </td>
            </tr>

            <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
              <td><button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button></td>
              <td>Firefox</td>
              <td>firefox</td>
              <td>firefox</td>
              <td>firefox</td>
            </tr>
            <tr>
              <td colspan="6" class="hiddenRow">
                <div id="demo2" class="accordian-body collapse">Demo2</div>
              </td>
            </tr>
            <tr data-toggle="collapse" data-target="#demo3" class="accordion-toggle">
              <td><button class="btn btn-default btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button></td>
              <td>Chrome</td>
              <td>Chrome</td>
              <td>Chrome</td>
              <td>Chrome</td>
            </tr>
            <tr>
              <td colspan="6" class="hiddenRow">
                <div id="demo3" class="accordian-body collapse">Demo3</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>