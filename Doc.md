Tema: SynthWave '84

<!-- Clases -->
nest g cl core/message/messages --flat --no-spec
nest g cl commands/api/dto/OpenAccountDto --flat --no-spec
<!-- Crear modelos -->
nest g mo querys
nest g mo core
nest g mo common
nest g mo commands

<!-- Crear controladores -->
nest g co commands/controller/open-account
nest g co commands/api/controller/open-account --flat --no-spec

nest g co commands/api/controller/close-account --flat --no-spec
nest g co commands/api/controller/deposit-funds --flat --no-spec
nest g co commands/api/controller/withdraw-funds --flat --no-spec

nest g cl commands/api/dto/OpenAccountDto --flat --no-spec

<!-- Services -->
nest g s commands/api/commands/open-account-handler --flat --no-spec
nest g s commands/api/commands/close-account-handler --flat --no-spec

<!-- Crear Vo -->
nest g cl common/dto/account-type --flat --no-spec

<!--  -->
Dispacher: patron mediador
bus -> broker para
command handler -> manejador utiliza un command 
command ->
agregatte -> toda la logica de negocio
